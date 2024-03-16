"use server";

import { z } from "zod";
import prisma from "@/app/lib/prismadb";
import { revalidatePath } from "next/cache";
import getCurrentUser from "../actions/get-current-user";
import { getEmbeddingForApplication } from "../data";
import { applicationsIndex } from "../pinecone";

const FormSchema = z.object({
  id: z.string(),
  userId: z.string(),
  company: z.string(),
  position: z.string(),
  jobDescriptionLink: z.string(),
  note: z.string().optional(),
  date: z.string(),
  status: z.string(),
});

const UpdateApplication = FormSchema.omit({
  id: true,
  date: true,
  userId: true,
});

export async function updateApplication(
  applicationId: string,
  formData: FormData
) {
  try {
    const { company, position, status, jobDescriptionLink, note } =
      UpdateApplication.parse({
        company: formData.get("company"),
        position: formData.get("position"),
        jobDescriptionLink: formData.get("jb-link"),
        note: formData.get("note"),
        status: formData.get("status"),
      });

    const user = await getCurrentUser();

    const embedding = await getEmbeddingForApplication(
      company,
      position,
      jobDescriptionLink,
      note,
      status
    );

    await prisma.$transaction(async (tx) => {
      const application = await prisma.application.update({
        data: {
          position: position,
          company: company,
          userId: user?.id as string,
          jobDescriptionLink: jobDescriptionLink,
          note: note,
          status: status,
        },
        where: {
          id: applicationId,
        },
      });

      await applicationsIndex.upsert([
        {
          id: application.id,
          values: embedding,
          metadata: { userId: user?.id || "unknown" },
        },
      ]);

      return application;
    });

    revalidatePath("/job-applications");
    return { message: "Job application has been updated" };
  } catch (error) {
    return { message: "There is an error updating a job application" };
  }
}

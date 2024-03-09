"use server";

import { z } from "zod";
import prisma from "@/app/lib/prismadb";
import { revalidatePath } from "next/cache";
import getCurrentUser from "../actions/get-current-user";

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

const CreateApplication = FormSchema.omit({
  id: true,
  date: true,
  status: true,
  userId: true,
});

export async function createApplication(formData: FormData) {
  const { company, position, jobDescriptionLink, note } =
    CreateApplication.parse({
      company: formData.get("company"),
      position: formData.get("position"),
      jobDescriptionLink: formData.get("jb-link"),
      note: formData.get("note"),
    });

  const date = new Date().toISOString().split("T")[0];
  const user = await getCurrentUser();

  await prisma.application.create({
    data: {
      position: position,
      company: company,
      userId: user?.id as string,
      jobDescriptionLink: jobDescriptionLink,
      note: note,
      date: date,
    },
  });
  revalidatePath("/job-applications");
}

"use server";

import prisma from "@/app/lib/prismadb";
import { revalidatePath } from "next/cache";
import { applicationsIndex } from "../pinecone";

export async function deleteApplication(formData: FormData) {
  try {
    const id = formData.get("applicationId") as string;

    await prisma.$transaction(async (tx) => {
      await tx.application.delete({
        where: {
          id: id,
        },
      });

      await applicationsIndex.deleteOne(id);
    });

    revalidatePath("/job-applications");

    return { message: "Job application has been deleted" };
  } catch (error) {
    return { message: "There is an error deleting a job application" };
  }
}

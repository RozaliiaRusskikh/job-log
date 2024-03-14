"use server";

import prisma from "@/app/lib/prismadb";
import { revalidatePath } from "next/cache";

export async function deleteApplication(formData: FormData) {
  try {
    const id = formData.get("applicationId") as string;

    await prisma.application.delete({
      where: {
        id: id,
      },
    });
    revalidatePath("/job-applications");
    return { message: "Job application has been deleted" };
  } catch (e) {
    return { message: "There is an error deleting a job application" };
  }
}

"use server";

import prisma from "@/app/lib/prismadb";
import { revalidatePath } from "next/cache";

export async function deleteApplication(formData: FormData) {
  const id = formData.get("applicationId") as string;

  await prisma.application.delete({
    where: {
      id: id,
    },
  });

  revalidatePath("/job-applications");
}

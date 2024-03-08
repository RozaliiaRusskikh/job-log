import prisma from "@/app/lib/prismadb";
import getCurrentUser from "./actions/get-current-user";

export async function fetchAllUserApplications() {
  try {
    const user = await getCurrentUser();
    const applications = await prisma.application.findMany({
      where: {
        userId: user?.id ?? undefined,
      },
      orderBy: {
        createdAt: "desc",
      },
      include: { user: true },
    });
    return applications;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch application data.");
  }
}

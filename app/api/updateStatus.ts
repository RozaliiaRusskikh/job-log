import cron from "node-cron";
import prisma from "@/app/lib/prismadb";

// Define a function to update documents older than 14 days to "rejected" status
async function updateStatus(): Promise<void> {
  try {
    const fourteenDaysAgo = new Date(
      new Date().getTime() - 14 * 24 * 60 * 60 * 1000
    );

    // Find documents older than 14 days
    const documentsToUpdate = await prisma.application.findMany({
      where: {
        createdAt: {
          lt: fourteenDaysAgo,
        },
        status: "APPLIED",
      },
    });

    // Update status to "rejected" for each document
    for (const document of documentsToUpdate) {
      await prisma.application.update({
        where: { id: document.id },
        data: { status: "REJECTED" },
      });
    }

    console.log("Status updated successfully.");
  } catch (error) {
    console.error("Error updating status:", error);
  }
}

// Schedule the task to run daily
cron.schedule("0 0 * * *", () => {
  console.log("Running status update task...");
  updateStatus();
});

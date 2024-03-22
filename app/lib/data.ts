"use server";

import prisma from "@/app/lib/prismadb";
import getCurrentUser from "./actions/get-current-user";
import { getEmbedding } from "./openai";
import { unstable_noStore as noStore } from "next/cache";

//also it is used for sorting by date in desc order
export async function fetchAllUserApplications() {
  noStore();
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

export async function fetchSortedApplicationsByAscDate() {
  noStore();
  try {
    const user = await getCurrentUser();
    const applications = await prisma.application.findMany({
      where: {
        userId: user?.id ?? undefined,
      },
      orderBy: {
        createdAt: "asc",
      },
      include: { user: true },
    });
    return applications;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch application data.");
  }
}

export async function fetchSortedApplicationsByAscStatus() {
  noStore();
  try {
    const user = await getCurrentUser();
    const applications = await prisma.application.findMany({
      where: {
        userId: user?.id ?? undefined,
      },
      orderBy: {
        status: "asc",
      },
      include: { user: true },
    });
    return applications;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch application data.");
  }
}

export async function fetchSortedApplicationsByDescStatus() {
  noStore();
  try {
    const user = await getCurrentUser();
    const applications = await prisma.application.findMany({
      where: {
        userId: user?.id ?? undefined,
      },
      orderBy: {
        status: "desc",
      },
      include: { user: true },
    });
    return applications;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch application data.");
  }
}

export async function fetchFilteredApplications(query: string | undefined) {
  noStore();
  try {
    const user = await getCurrentUser();
    const filteredApplications = await prisma.application.findMany({
      where: {
        userId: user?.id ?? undefined,
        OR: [
          {
            company: {
              contains: query ?? "",
              mode: "insensitive",
            },
          },
          {
            position: {
              contains: query ?? "",
              mode: "insensitive",
            },
          },
        ],
      },
      orderBy: {
        createdAt: "desc",
      },
      include: { user: true },
    });
    return filteredApplications;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch application data.");
  }
}

export async function getEmbeddingForApplication(
  company: string,
  position: string,
  jobDescriptionLink: string,
  note: string | undefined,
  status?: string | "APPLIED"
) {
  return getEmbedding(
    company + "/n/n" + position + "/n/n" + jobDescriptionLink + "/n/n" + note ??
      "" + "/n/n" + status
  );
}

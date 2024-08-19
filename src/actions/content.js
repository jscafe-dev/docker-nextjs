"use server";
import { prisma } from "@/lib/prisma";

export async function fetchContent() {
  const content = await prisma.todo.findMany();
  return content;
}

export async function createContent(data) {
  await prisma.todo.create({
    data: {
      content: data,
    },
  });
}

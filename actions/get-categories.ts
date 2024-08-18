"use server";

import { db } from "@/lib/db";

export async function getCategories() {
  const categories = await db.category.findMany({
    select: {
      id: true,
      name: true,
    },
  });

  return categories;
}

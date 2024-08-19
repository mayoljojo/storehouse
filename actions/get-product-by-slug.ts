"use server";

import { db } from "@/lib/db";
import { ProductFormSchema } from "@/zod-schema/schema";
import { z } from "zod";

type ProductFormData = z.infer<typeof ProductFormSchema>;

export async function getProductBySlug(id: number) {
  const product = await db.product.findUnique({
    where: {
      id: id,
    },
    select: {
      //   id: true,
      name: true,
      description: true,
      price: true,
      stock: true,
      tags: true,
      categoryId: true,
    },
  });

  return product;
}

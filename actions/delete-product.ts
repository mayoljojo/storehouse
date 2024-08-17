"use server";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function deleteProduct(id: number) {
  const deleteProduct = await db.product.delete({
    where: {
      id: id,
    },
  });

  console.log("Product deleted successfully:", deleteProduct);

  revalidatePath("/product/data-table");
}

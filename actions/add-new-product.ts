"use server";

import { db } from "@/lib/db";
import { ProductFormSchema } from "@/zod-schema/schema";
import { redirect } from "next/navigation";

export async function addNewProduct(formData: FormData) {
  // Transform FormData into a plain object
  const rawFormData = Object.fromEntries(formData.entries());

  // Convert necessary fields to their appropriate types
  const convertedData = {
    name: rawFormData.name,
    description: rawFormData.description,
    category: parseInt(rawFormData.category as string, 10),
    price: parseFloat(rawFormData.price as string),
    tags: rawFormData.tags,
    stock: parseInt(rawFormData.stock as string, 10),
  };

  // Validate and parse the data using the existing ProductFormSchema
  const parsedData = ProductFormSchema.safeParse(convertedData);

  if (!parsedData.success) {
    // Handle validation errors
    console.error("Validation failed:", parsedData.error);
    return { error: "Error - Validation failed during parse." };
  }

  // If the data is valid, you can safely use it
  const productData = parsedData.data;
  console.log("Validated Product Data:", productData);

  // Save the data to the database using Prisma
  // try {
  const savedProduct = await db.product.create({
    data: {
      name: productData.name,
      description: productData.description,
      categoryId: productData.category,
      price: productData.price,
      tags: productData.tags, // This field is optional
      stock: productData.stock,
    },
  });

  console.log("Product saved successfully:", savedProduct);

  //   return savedProduct;
  // } catch (error) {
  //   console.error("Error saving product:", error);
  // }
  redirect("/products");
}

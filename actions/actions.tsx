"use server";

// export async function addNewProduct(formData: FormData) {
//   const rawFormData = {
//     name: formData.get("name"),
//     description: formData.get("description"),
//     category: formData.get("category"),
//     price: formData.get("price"),
//     tags: formData.get("tags"),
//     stock: formData.get("stock"),
//   };

//   console.log(rawFormData);
// }

import { ProductFormSchema } from "@/zod-schema/schema";

export async function addNewProduct(formData: FormData) {
  // Transform FormData into a plain object
  const rawFormData = Object.fromEntries(formData.entries());

  // Validate and parse the data using the existing ProductFormSchema
  const parsedData = ProductFormSchema.safeParse({
    name: rawFormData.name,
    description: rawFormData.description,
    category: rawFormData.category,
    price: rawFormData.price,
    tags: rawFormData.tags,
    stock: rawFormData.stock,
  });

  if (!parsedData.success) {
    // Handle validation errors
    console.error("Validation failed:", parsedData.error);
    return;
  }
  // If the data is valid, you can safely use it
  const productData = parsedData.data;

  console.log("Validated Product Data:", productData);

  // Proceed with further processing, e.g., saving to a database
}

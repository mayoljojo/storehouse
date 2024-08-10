import { z } from "zod";

export const ProductFormSchema = z.object({
  name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  description: z.string().min(2, {
    message: "Description must be at least 2 characters.",
  }),
  category: z.string(),
  price: z.preprocess(
    (val) => Number(val),
    z
      .number()
      .min(1, {
        message: "Price must be at least 1.",
      })
      .max(999999, {
        message: "Price must be at most 999999.",
      })
  ),
  tags: z.string().optional(),
  stock: z.preprocess(
    (val) => Number(val),
    z
      .number()
      .min(0, {
        message: "Stock must be at least 0.",
      })
      .max(9999, {
        message: "Stock must be at most 9999.",
      })
  ),
});

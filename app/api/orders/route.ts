// pages/api/orders/index.js
import { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";
import { db } from "@/lib/db";

// Define the schema for order validation using Zod
const orderSchema = z.object({
  customerName: z.string().refine((value) => value.trim().length > 0, {
    message: "Customer Name cannot be empty.",
  }),
  cashierName: z.string().refine((value) => value.trim().length > 0, {
    message: "Cashier Name cannot be empty.",
  }),
  products: z.array(
    z.object({
      productId: z.number().positive(),
      quantity: z.number().min(1),
      price: z.number().min(0),
    })
  ),
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  switch (method) {
    case "POST":
      try {
        // Parse and validate the incoming request body
        const parsed = orderSchema.parse(req.body);

        // Start a transaction to ensure atomic operations
        const order = await db.$transaction(async (db) => {
          // Create a new order
          const newOrder = await db.order.create({
            data: {
              customerName: parsed.customerName,
              cashierName: parsed.cashierName,
              totalPrice: parsed.products.reduce(
                (sum, p) => sum + p.price * p.quantity,
                0
              ),
            },
          });

          // Create associated OrderProduct entries
          await db.orderProduct.createMany({
            data: parsed.products.map((product) => ({
              orderId: newOrder.id,
              productId: product.productId,
              quantity: product.quantity,
              price: product.price,
            })),
          });

          return newOrder;
        });

        res.status(201).json({ success: true, data: order });
      } catch (error) {
        console.error(error);
        res.status(400).json({ success: false, error: error });
      } finally {
        await db.$disconnect();
      }
      break;

    default:
      res.status(405).json({ success: false, error: "Method not allowed" });
      break;
  }
}

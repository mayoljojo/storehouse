import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const context = await prisma.product.findMany();
    return NextResponse.json(context, { status: 200 });
  } catch (error: any) {
    console.error("Error fetching products:", error); // Detailed error logging

    const errorMessage =
      error instanceof Error ? error.message : "An unknown error occurred";

    return NextResponse.json(
      { message: "Unable to fetch Products.", error: errorMessage },
      { status: 500 }
    );
  }
}

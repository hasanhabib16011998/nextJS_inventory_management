import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function POST(request) {
  try {
    const data = await request.json();

    // 1. Convert string values to correct Numeric types for Prisma/MongoDB
    const itemData = {
      title: data.title, // Mapping form 'title' to schema 'name'
      description: data.description,
      categoryId: data.categoryId,
      sku: data.sku,
      barcode: data.barcode,
      quantity: parseInt(data.qty), // Conversion to Int
      unitId: data.unitId,
      brandId: data.brandId,
      supplierId: data.supplierId,
      buyingPrice: parseFloat(data.buyingPrice), // Conversion to Float
      sellingPrice: parseFloat(data.sellingPrice), // Conversion to Float
      reOrderPoint: parseInt(data.reorderPoint), // Mapping 'reorderPoint' to 'reOrderPoint'
      location: data.location || "",
      imageURL: data.imageURL, // Ensure this matches your ImageUpload output
      weight: data.weight ? parseFloat(data.weight) : null,
      dimensions: data.dimensions || "",
      taxRate: parseFloat(data.taxRate),
      notes: data.notes,
    };
    const newItem = await db.item.create({
      data: itemData,
    });

    console.log("✅ New Item Created:", newItem);

    return NextResponse.json(itemData, { status: 201 });
  } catch (error) {
    console.error("❌ Error creating item:", error);
    return NextResponse.json(
      {
        error: error.message || error,
        message: "Failed to create an item",
      },
      { status: 500 }
    );
  }
}

export async function GET(request) {
  try{
      const items = await db.item.findMany({
          orderBy: { createdAt: 'desc' }
      });
      return NextResponse.json(items);

  } catch(error) {
      console.log(error);
      return NextResponse.json({
          error,
          message: "Failed to fetch items"
      },{
          status:500,
      });
  }
}
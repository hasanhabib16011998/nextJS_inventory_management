import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const {
      title,
      categoryId,
      sku,
      barcode,
      qty,
      unitId,
      brandId,
      supplierId,
      warehouseId,
      buyingPrice,
      sellingPrice,
      reorderPoint,
      weight,
      taxRate,
      description,
      notes,
    } = await request.json();

    // Mock item object to return (normally you'd save this to DB)
    const newItem = {
      title,
      categoryId,
      sku,
      barcode,
      qty,
      unitId,
      brandId,
      supplierId,
      warehouseId,
      buyingPrice,
      sellingPrice,
      reorderPoint,
      weight,
      taxRate,
      description,
      notes,
      createdAt: new Date().toISOString(),
    };

    console.log("✅ New Item Created:", newItem);

    return NextResponse.json(newItem, { status: 201 });
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

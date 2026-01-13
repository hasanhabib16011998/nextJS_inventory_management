import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request,{params}) {
    try{
        const { id } = await params;
        const item = await db.item.findUnique({
            where: { id },
            include: {
                category: true,
                supplier: true
            }
        });
        return NextResponse.json(item);

    } catch(error) {
        console.log(error);
        return NextResponse.json({
            error,
            message: "Failed to fetch item"
        },{
            status:500,
        });
    }
}

export async function PUT(request,{params}) {
    try{
        const {id} = await params;
        const data = await request.json();
        const item = await db.item.update({
            where: { id },
            data: {
                title: data.title,
                description: data.description,
                sku: data.sku,
                barcode: data.barcode,
                location: data.location || "",
                imageURL: data.imageURL,
                dimensions: data.dimensions || "",
                notes: data.notes,
                
                // Ensure numbers are valid
                quantity: parseInt(data.quantity) || 0, 
                reOrderPoint: parseInt(data.reOrderPoint) || 0,
                buyingPrice: parseFloat(data.buyingPrice) || 0,
                sellingPrice: parseFloat(data.sellingPrice) || 0,
                taxRate: parseFloat(data.taxRate) || 0,
                weight: data.weight ? parseFloat(data.weight) : null,

                // RELATION FIELDS ONLY (Remove categoryId, unitId, etc. from above)
                category: { connect: { id: data.categoryId } },
                unit: { connect: { id: data.unitId } },
                brand: { connect: { id: data.brandId } },
                supplier: { connect: { id: data.supplierId } },
            },
        });
        return NextResponse.json(item);

    } catch(error) {
        console.log(error);
        return NextResponse.json({
            error,
            message: "Failed to update item"
        },{
            status:500,
        });
    }
}

export async function DELETE(request,{params}) {
    try{
        const { id } = await params;
        const item = await db.item.delete({
            where: { id }
        });
        return NextResponse.json(item);

    } catch(error) {
        console.log(error);
        return NextResponse.json({
            error,
            message: "Failed to delete item"
        },{
            status:500,
        });
    }
}
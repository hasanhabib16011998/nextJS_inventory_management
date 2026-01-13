import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request,{params}) {
    try{
        const { id } = await params;
        const addStockAdjustment = await db.addStockAdjustment.findUnique({
            where: { id }
        });
        return NextResponse.json(addStockAdjustment);

    } catch(error) {
        console.log(error);
        return NextResponse.json({
            error,
            message: "Failed to fetch Add Stock Adjustment"
        },{
            status:500,
        });
    }
}

export async function PUT(request,{params}) {
    try{
        const {id} = await params;
        const { itemId, addStockQty, receivingWarehouseId, notes, referenceNumber } = await request.json();
        const addStockAdjustment = await db.addStockAdjustment.update({
            where: { id },
            data: {
                addStockQty: parseInt(addStockQty),
                itemId: itemId,
                receivingWarehouseId,
                notes,
                referenceNumber,
            }
        });
        return NextResponse.json(addStockAdjustment);

    } catch(error) {
        console.log(error);
        return NextResponse.json({
            error,
            message: "Failed to update addStockAdjustment"
        },{
            status:500,
        });
    }
}

export async function DELETE(request,{params}) {
    try{
        const { id } = await params;
        const addStockAdjustment = await db.addStockAdjustment.delete({
            where: { id }
        });
        return NextResponse.json(addStockAdjustment);

    } catch(error) {
        console.log(error);
        return NextResponse.json({
            error,
            message: "Failed to delete addStockAdjustment"
        },{
            status:500,
        });
    }
}
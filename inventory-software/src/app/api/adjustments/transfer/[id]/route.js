import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request,{params}) {
    try{
        const { id } = await params;
        const transferStockAdjustment = await db.transferStockAdjustment.findUnique({
            where: { id }
        });
        return NextResponse.json(transferStockAdjustment);

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
        const { transferStockQty, referenceNumber, itemId, givingWarehouseId, receivingWarehouseId, notes } = await request.json();
        const transferStockAdjustment = await db.transferStockAdjustment.update({
            where: { id },
            data: {
                transferStockQty: parseInt(transferStockQty),
                referenceNumber,
                itemId,
                givingWarehouseId,
                receivingWarehouseId,
                notes
            }
        });
        return NextResponse.json(transferStockAdjustment);

    } catch(error) {
        console.log(error);
        return NextResponse.json({
            error,
            message: "Failed to update transferStockAdjustment"
        },{
            status:500,
        });
    }
}

export async function DELETE(request,{params}) {
    try{
        const { id } = await params;
        const transferStockAdjustment = await db.transferStockAdjustment.delete({
            where: { id }
        });
        return NextResponse.json(transferStockAdjustment);

    } catch(error) {
        console.log(error);
        return NextResponse.json({
            error,
            message: "Failed to delete transferStockAdjustment"
        },{
            status:500,
        });
    }
}
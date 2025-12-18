import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request){
    try {
        const { itemId, addStockQty, receivingWarehouseId, notes, referenceNumber } = await request.json();
        const adjustment = await db.addStockAdjustment.create({
            data: {
                addStockQty: parseInt(addStockQty),
                itemId: itemId,
                receivingWarehouseId,
                notes,
                referenceNumber,
            }
        })
        console.log(adjustment);
        return NextResponse.json(adjustment);
    } catch(error) {
        console.log(error);
        return NextResponse.json({
            error,
            message: "Failed to create a adjustment"
        },{
            status:500,
        });
    }
}

export async function GET(request) {
    try{
        const addStock = await db.addStockAdjustment.findMany({
            orderBy: { createdAt: 'desc' }
        });
        return NextResponse.json(addStock);

    } catch(error) {
        console.log(error);
        return NextResponse.json({
            error,
            message: "Failed to fetch add stock adjustments"
        },{
            status:500,
        });
    }
}
import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request){
    try {
        const { addStockQty, receivingWarehouseId, notes, referenceNumber } = await request.json();
        const adjustment = await db.addStockAdjustment.create({
            data: {
                addStockQty: parseInt(addStockQty),
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
import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function POST(request){
    try {
        const { transferStockQty, referenceNumber, itemId, givingWarehouseId, receivingBranchId, notes } = await request.json();
        const adjustment = await db.transferStockQty.create({ transferStockQty: parseInt(transferStockQty), referenceNumber, itemId, givingWarehouseId, receivingBranchId, notes });
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
import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function POST(request){
    try {
        const { transferStockQty, referenceNumber, itemId, givingWarehouseId, receivingWarehouseId, notes } = await request.json();
        const adjustment = await db.transferStockAdjustment.create({ 
            data: {
                transferStockQty: parseInt(transferStockQty),
                referenceNumber,
                itemId,
                givingWarehouseId,
                receivingWarehouseId,
                notes
                
            }
        });
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
        const transferStock = await db.transferStockAdjustment.findMany({
            orderBy: { createdAt: 'desc' }
        });
        return NextResponse.json(transferStock);

    } catch(error) {
        console.log(error);
        return NextResponse.json({
            error,
            message: "Failed to fetch transfer stock adjustments"
        },{
            status:500,
        });
    }
}
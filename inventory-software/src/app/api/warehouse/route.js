import { NextResponse } from "next/server";
import db from "@/lib/db";
export async function POST(request){
    try {
        const { title, location, type, description } = await request.json();
        const warehouse = await db.warehouse.create({
            data: { title, location, warehouseType: type, description }
        })
        console.log(warehouse);
        return NextResponse.json(warehouse);
    } catch(error) {
        console.log(error);
        return NextResponse.json({
            error,
            message: "Failed to create a warehouse"
        },{
            status:500,
        });
    }
}
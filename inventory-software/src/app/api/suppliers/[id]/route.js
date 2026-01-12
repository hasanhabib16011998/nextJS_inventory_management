import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request,{params}) {
    try{
        const { id } = await params;
        const supplier = await db.supplier.findUnique({
            where: { id }
        });
        return NextResponse.json(supplier);

    } catch(error) {
        console.log(error);
        return NextResponse.json({
            error,
            message: "Failed to fetch supplier"
        },{
            status:500,
        });
    }
}

export async function PUT(request,{params}) {
    try{
        const {id} = await params;
        const { title } = await request.json();
        const supplier = await db.supplier.update({
            where: { id },
            data: {
                title
            }
        });
        return NextResponse.json(supplier);

    } catch(error) {
        console.log(error);
        return NextResponse.json({
            error,
            message: "Failed to update supplier"
        },{
            status:500,
        });
    }
}
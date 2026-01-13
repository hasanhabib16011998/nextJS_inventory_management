import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request,{params}) {
    try{
        const { id } = await params;
        const warehouse = await db.warehouse.findUnique({
            where: { id }
        });
        return NextResponse.json(warehouse);

    } catch(error) {
        console.log(error);
        return NextResponse.json({
            error,
            message: "Failed to fetch warehouse"
        },{
            status:500,
        });
    }
}

export async function PUT(request,{params}) {
    try{
        const {id} = await params;
        const { title } = await request.json();
        const warehouse = await db.warehouse.update({
            where: { id },
            data: {
                title
            }
        });
        return NextResponse.json(warehouse);

    } catch(error) {
        console.log(error);
        return NextResponse.json({
            error,
            message: "Failed to update warehouse"
        },{
            status:500,
        });
    }
}

export async function DELETE(request,{params}) {
    try{
        const { id } = await params;
        const warehouse = await db.warehouse.delete({
            where: { id }
        });
        return NextResponse.json(warehouse);

    } catch(error) {
        console.log(error);
        return NextResponse.json({
            error,
            message: "Failed to delete warehouse"
        },{
            status:500,
        });
    }
}
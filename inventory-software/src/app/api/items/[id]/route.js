import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request,{params}) {
    try{
        const { id } = await params;
        const item = await db.item.findUnique({
            where: { id }
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
        const { title } = await request.json();
        const item = await db.item.update({
            where: { id },
            data: {
                title
            }
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
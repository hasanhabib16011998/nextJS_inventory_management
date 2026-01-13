import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request,{params}) {
    try{
        const { id } = await params;
        const category = await db.category.findUnique({
            where: { id }
        });
        return NextResponse.json(category);

    } catch(error) {
        console.log(error);
        return NextResponse.json({
            error,
            message: "Failed to fetch category"
        },{
            status:500,
        });
    }
}

export async function PUT(request,{params}) {
    try{
        const {id} = await params;
        const { title } = await request.json();
        const category = await db.category.update({
            where: { id },
            data: {
                title
            }
        });
        return NextResponse.json(category);

    } catch(error) {
        console.log(error);
        return NextResponse.json({
            error,
            message: "Failed to update category"
        },{
            status:500,
        });
    }
}


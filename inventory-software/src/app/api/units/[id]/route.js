import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request,{params}) {
    try{
        const { id } = await params;
        const unit = await db.unit.findUnique({
            where: { id }
        });
        return NextResponse.json(unit);

    } catch(error) {
        console.log(error);
        return NextResponse.json({
            error,
            message: "Failed to fetch unit"
        },{
            status:500,
        });
    }
}

export async function PUT(request,{params}) {
    try{
        const {id} = await params;
        const { title,abbreviation } = await request.json();
        const unit = await db.unit.update({
            where: { id },
            data: {
                title,
                abbreviation
            }
        });
        return NextResponse.json(unit);

    } catch(error) {
        console.log(error);
        return NextResponse.json({
            error,
            message: "Failed to update unit"
        },{
            status:500,
        });
    }
}
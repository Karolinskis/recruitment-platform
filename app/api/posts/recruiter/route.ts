import prisma from "@/app/utils/prisma/client";
import { NextResponse } from "next/server";

export async function GET() {
    let recruiterPosts = await prisma.darbo_skelbimai.findMany();
    return NextResponse.json(recruiterPosts);
}
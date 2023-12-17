import prisma from "@/app/utils/prisma/client";
import { NextResponse } from "next/server";

export async function GET() {
    let jobSeekerPosts = await prisma.skelbimu_anketos.findMany();
    return NextResponse.json(jobSeekerPosts);
}
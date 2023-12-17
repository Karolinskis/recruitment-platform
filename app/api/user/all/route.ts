import prisma from "@/app/utils/prisma/client";
import { NextResponse } from "next/server";

export async function GET() {
    let allUsers = await prisma.naudotojai.findMany();
    return NextResponse.json(allUsers);
}
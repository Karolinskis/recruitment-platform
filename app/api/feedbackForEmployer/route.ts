import prisma from "@/app/utils/prisma/client";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { aprasymas, tipas, fk_Naudotojasid_Naudotojas, fk_darbuotojas } =
    await request.json();

  const newComment = await prisma.atsiliepimai.create({
    data: { aprasymas, tipas, fk_Naudotojasid_Naudotojas, fk_darbuotojas },
  });

  return NextResponse.json({ atsiliepimai: newComment });
}

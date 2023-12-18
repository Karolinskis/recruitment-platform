import prisma from "@/app/utils/prisma/client";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { pavadinimas, aprasymas, valandinis_atlyginimas, id_Skelbimo_anketa, fk_Darbuotojasid_Darbuotojas, fk_Naudotojasid_Naudotojas } =
    await request.json();

  const newJobSeekerPost = await prisma.skelbimu_anketos.create({
    data: { pavadinimas, aprasymas, valandinis_atlyginimas : Number(valandinis_atlyginimas), id_Skelbimo_anketa : Number(id_Skelbimo_anketa), fk_Darbuotojasid_Darbuotojas, fk_Naudotojasid_Naudotojas },
  });

  return NextResponse.json({newJobSeekerPost});
}

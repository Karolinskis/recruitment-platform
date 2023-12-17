import prisma from "@/app/utils/prisma/client";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

/**
 * GET handler for /api/user/[id]
 * Fetches a user by id from the database
 * @param {NextApiRequest} request - The incoming request object 
 * @param {Object} params - The route params
 * @param {Number} params.id - The id of the user to fetch 
 * @returns {NextResponse} - The response object
 */
export async function GET(
  request: NextApiRequest,
  { params }: { params: { id: Number } }
) {
  let user = await prisma.naudotojai.findUnique({
    where: { id_Naudotojas: Number(params.id) },
  });
  return NextResponse.json(user);
}

/**
 * PUT handler for /api/user/[id]
 * Updates a user by id in the database
 * @param {NextApiRequest} request - The incoming request object
 * @param {Object} params - The route params
 * @param {Number} params.id - The id of the user to update 
 * @returns {NextResponse} - The response object
 */
export async function PUT(request: Request, { params }: { params: { id: Number } }) {
  const { 
    blokavimo_pabaiga,
    el_pastas,
    gimimo_data,
    id_Naudotojas,
    linkedin_url,
    lytis,
    miestas,
    paskyros_sukurimo_data,
    patvirtintas,
    pavarde,
    role,
    slaptazodis,
    tel_numeris,
    vardas
  } = await request.json();

  const updatedUser = await prisma.naudotojai.update({
    where: { 
      id_Naudotojas: Number(params.id) 
    },
    data: {
      blokavimo_pabaiga: new Date(blokavimo_pabaiga), 
      vardas, 
      pavarde,
      lytis, 
      el_pastas, 
      tel_numeris,
      gimimo_data,
      linkedin_url,
      patvirtintas : Boolean(patvirtintas),
    },
  });

  return NextResponse.json(updatedUser);
}

/**
 * DELETE handler for /api/user/[id]
 * Deletes a user by id from the database
 * @param {NextApiRequest} request - The incoming request object
 * @param {Object} params - The route params
 * @param {Number} params.id - The id of the user to delete 
 * @returns {NextResponse} - The response object
 */
export async function DELETE(request: Request, { params }: { params: { id: Number } }) {
  // Delete related records first
  await prisma.darbo_pasiulymai.deleteMany({
    where: {
      fk_Naudotojasid_Naudotojas1: Number(params.id)
    },
  });

  // Delete the user
  const deletedUser = await prisma.naudotojai.delete({
    where: { 
      id_Naudotojas: Number(params.id) 
    },
  });

  return NextResponse.json(deletedUser);
}
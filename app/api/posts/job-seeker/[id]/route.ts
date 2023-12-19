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
  let post = await prisma.skelbimu_anketos.findUnique({
    where: { id_Skelbimo_anketa: Number(params.id) },
  });
  return NextResponse.json(post);
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
    pavadinimas,
    aprasymas,
    valandinis_atlyginimas,
    validuota,
    id_Skelbimo_anketa,
    fk_Naudotojasid_Naudotojas,
    fk_Darbuotojasid_Darbuotojas,
  } = await request.json();

  const updatedPost = await prisma.skelbimu_anketos.update({
    where: { 
      id_Skelbimo_anketa: Number(params.id) 
    },
    data: {
        pavadinimas,
        aprasymas,
        valandinis_atlyginimas : Number(valandinis_atlyginimas),
        validuota,
    },
  });

  return NextResponse.json(updatedPost);
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
      fk_Skelbimo_anketaid_Skelbimo_anketa : Number(params.id)
    },
  });

  // Delete the user
  const deletedPost = await prisma.skelbimu_anketos.delete({
    where: { 
      id_Skelbimo_anketa: Number(params.id) 
    },
  });

  return NextResponse.json(deletedPost);
}
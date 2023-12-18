import prisma from "@/app/utils/prisma/client";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export async function GET() {
  // Fetch job offers linked to a specific user (hardcoded userId for now)
  const userId = 1; // Replace with dynamic user ID later
  const jobOffers = await prisma.darbo_pasiulymai.findMany({
      where: { fk_Naudotojasid_Naudotojas: userId },
      select: {
          id_Darbo_pasiulymas: true,
          pavadinimas: true,
          aprasymas: true
      }
  });
  return NextResponse.json(jobOffers);
}

export async function PUT(request: NextApiRequest, { params }: { params: { id: Number } }) {
  // Extracting the job offer's new details from the request body
  const { pavadinimas, aprasymas } = JSON.parse(request.body as string);

  // Extracting the job offer ID from the URL parameters
  const offerId = Number(params.id);

  try {
    // Update the job offer in the database
    const updatedOffer = await prisma.darbo_pasiulymai.update({
      where: { id_Darbo_pasiulymas: offerId },
      data: { pavadinimas, aprasymas },
    });

    // Return the updated offer using NextResponse
    return NextResponse.json(updatedOffer);
  } catch (error) {
    console.error('Error updating job offer:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}


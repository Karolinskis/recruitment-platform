// Import necessary modules
import prisma from "@/app/utils/prisma/client";
import { NextResponse } from "next/server";


// This function will handle the deletion of a user account
export async function POST() {
    const userId = 1; // Hardcoded user ID for now
    // Uncomment below when session is available
    // const userId = session.userId;

    try {
        await prisma.atsiliepimai.updateMany({
            where: { fk_Naudotojasid_Naudotojas: userId },
            data: { fk_Naudotojasid_Naudotojas: null}
        });

        // darbo_pasiulymai table
        await prisma.darbo_pasiulymai.updateMany({
            where: { fk_Naudotojasid_Naudotojas: userId },
            data: { fk_Naudotojasid_Naudotojas: null}
        });

        // darbo_pasiulymai table (alternate column)
        await prisma.darbo_pasiulymai.updateMany({
            where: { fk_Naudotojasid_Naudotojas1: userId },
            data: { fk_Naudotojasid_Naudotojas1: null }
        });

        // igudziai table
        await prisma.igudziai.updateMany({
            where: { fk_Naudotojasid_Naudotojas: userId },
            data: { fk_Naudotojasid_Naudotojas: null }
        });

        // nuotraukos table
        await prisma.nuotraukos.updateMany({
            where: { fk_Naudotojasid_Naudotojas: userId },
            data: { fk_Naudotojasid_Naudotojas: null }
        });

        // pranesimai table
        await prisma.pranesimai.updateMany({
            where: { fk_Naudotojasid_Naudotojas: userId },
            data: { fk_Naudotojasid_Naudotojas: null }
        });

        // uzimtumo_grafikai table
        await prisma.uzimtumo_grafikai.updateMany({
            where: { fk_Naudotojasid_Naudotojas: userId },
            data: { fk_Naudotojasid_Naudotojas: null }
        });

        await prisma.naudotojai.delete({
            where: {
                id_Naudotojas: userId
            }
        });

        return NextResponse.json({ message: 'Account successfully deleted' });
    } catch (error) {
        console.error('Error deleting user account:', error);
        return new NextResponse(JSON.stringify({ message: 'Internal server error' }), { status: 500 });
    }
}


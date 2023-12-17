// Import necessary modules
import prisma from "@/app/utils/prisma/client";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        // Fetch all users (naudotojai) and their busy dates (uzimtumo_grafikai)
        const users = await prisma.naudotojai.findMany({
            select: {
                id_Naudotojas: true,
                vardas: true,
                uzimtumo_grafikai: {
                    select: {
                        pradzia: true,
                        pabaiga: true,
                    },
                },
            },
        });

        // Transform the data into the desired format
        const userData = users.map(user => ({
            id: user.id_Naudotojas,
            name: user.vardas,
            busyDates: user.uzimtumo_grafikai.map(schedule => ({
                start: schedule.pradzia?.toISOString().split('T')[0] ?? '',
                end: schedule.pabaiga?.toISOString().split('T')[0] ?? null,
            })),
        }));

        // Return the data using NextResponse
        return NextResponse.json(userData);
    } catch (error) {
        // Handle any errors that occur during the fetch
        console.error('Error fetching user availability:', error);
        return new NextResponse(JSON.stringify({ message: 'Internal server error' }), { status: 500 });
    }
}


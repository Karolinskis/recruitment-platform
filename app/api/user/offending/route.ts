import prisma from "@/app/utils/prisma/client";
import { NextResponse } from "next/server";

export async function GET() {
    let badwords = [
        "blemba",
        "blet",
        "blyat",
        "blyn",
        "bybio",
        "bybis",
        "chui znym",
        "chui",
        "chuinia",
        "cyka",
        "debilas",
        "fuck",
        "gaidy",
        "gaidys",
        "gandonas",
        "hui",
        "isdulkink",
        "išdulkink",
        "išdulkinsiu",
        "kale",
        "kalė",
        "mockrusys",
        "močkrušys",
        "mėšlas",
        "nahui",
        "naxui",
        "pajibat",
        "pasipisi",
        "pasipisk",
        "pedikas",
        "pisau",
        "pisk",
        "pisu",
        "pizda",
        "pizdiets",
        "prietranka",
        "pydar",
        "pydaras",
        "pydare",
        "pyzdink",
        "retard",
        "retardas",
        "retardu",
        "rupuze",
        "rupužė",
        "shit",
        "shudas",
        "skystapyzde",
        "subinlaižy",
        "subinlaižys",
        "sudas",
        "suka",
        "xui",
        "xuine",
        "zajabys",
        "zayabys",
        "zertva",
        "ziertva",
        "zjbs",
        "šūdas",
    ];
    let allOffendingUsers: object[] = [];
    let addedIds = new Set();

    for (let word of badwords) {
        const users = await prisma.naudotojai.findMany({
            where: {
                OR: [
                    {
                        vardas: {
                            contains: word,
                        },
                    },
                    {
                        pavarde: {
                            contains: word,
                        },
                    },
                ],
            },
        });

        for (let user of users) {
            if (!addedIds.has(user.id_Naudotojas)) {
                allOffendingUsers.push(user);
                addedIds.add(user.id_Naudotojas);
            }
        }

    }

    return NextResponse.json(allOffendingUsers);
}
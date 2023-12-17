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
    let allOffendingRecruiterPosts: object[] = [];
    let addedIds = new Set();

    for (let word of badwords) {
        const recruiterPosts = await prisma.darbo_skelbimai.findMany({
            where: {
                OR: [
                    {
                        pavadinimas: {
                            contains: word,
                        },
                    },
                    {
                        aprasymas: {
                            contains: word,
                        },
                    },
                ],
            },
        });

        for (let post of recruiterPosts) {
            if (!addedIds.has(post.id_Darbo_skelbimas)) {
                allOffendingRecruiterPosts.push(post);
                addedIds.add(post.id_Darbo_skelbimas);
            }
        }
    }

    return NextResponse.json(allOffendingRecruiterPosts);
}
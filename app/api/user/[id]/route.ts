import prisma from "@/app/utils/prisma/client";
// import prisma from "../../../utils/prisma/client";

import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export async function GET(
  request: NextApiRequest,
  { params }: { params: { id: Number } }
) {
  let user = await prisma.naudotojai.findUnique({
    where: { id_Naudotojas: Number(params.id) },
  });
  return NextResponse.json(user);
}

//   return NextResponse.json(
//     {
//       message: "You can do whatever you want with me baby! User is logged in",
//     },
//     { status: 200 }
//   );
// }

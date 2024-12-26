import { NextRequest, NextResponse } from "next/server";
import prisma from "@/app/db";

export async function POST(req : NextRequest) {
   const body = await req.json();

   await prisma.user.create({
      data : {
         username : body.username,
         password : body.password
      }
   })

   return NextResponse.json({message : "Signed up"});
}

export async function GET() {
   const user = await prisma.user.findFirst({});
   return NextResponse.json({ name: user?.username, email: user?.username })
}
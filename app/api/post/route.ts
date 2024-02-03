import { currentUser } from "@/lib/auth";
import { db } from "@/lib/db";
import { ChooseAddressSchema } from "@/schemas";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const user = await currentUser();
    if (!user?.id) return new NextResponse("Unauthorized", { status: 401 });

    const data = await req.json();

    const { locationType, bedRooms, bathRooms, images } = data;

    if (!locationType || !bedRooms || !bathRooms || !images)
      return new NextResponse("Invalid fields", { status: 401 });

    const validatedAddressFields = ChooseAddressSchema.safeParse(data);
    if (!validatedAddressFields.success) {
      return new NextResponse("Invalid address fields", { status: 401 });
    }
    const { city, country, postalCode } = ChooseAddressSchema.parse(data);

    //create post, check start week, end week, title, price, and rate

    return NextResponse.json("ok");
  } catch (error) {
    console.log(error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

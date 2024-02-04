import { currentUser } from "@/lib/auth";
import { db } from "@/lib/db";
import { ChooseAddressSchema } from "@/schemas";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const user = await currentUser();
    if (!user?.id) return new NextResponse("Unauthorized", { status: 401 });

    const data = await req.json();

    const { locationType, bedRooms, bathRooms, images, price } = data;

    if (!locationType || !bedRooms || !bathRooms || !images)
      return new NextResponse("Invalid fields", { status: 401 });

    const validatedAddressFields = ChooseAddressSchema.safeParse(data);
    if (!validatedAddressFields.success) {
      return new NextResponse("Invalid address fields", { status: 401 });
    }
    const { city, country, postalCode, streetAddress } =
      ChooseAddressSchema.parse(data);

    const post = await db.post.create({
      data: {
        locationType,
        country,
        city,
        price,
        streetAddress,
        postalCode,
        bedRooms,
        bathRooms,
        rate: 1,
        startFreeWeek: new Date(),
        endFreeWeek: new Date(),
        images,
        ownerId: user?.id,
      },
    });

    return NextResponse.json(post);
  } catch (error) {
    console.log(error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

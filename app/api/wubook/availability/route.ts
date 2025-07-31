import { NextResponse } from "next/server";

export async function POST() {
  try {
    const res = await fetch(
      "https://kapi.wubook.net/kp/reservations/fetch_today_reservations",
      {
        method: "POST",
        headers: {
          "x-api-key": process.env.WUBOOK_API_KEY as string,
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    const text = await res.text();
    const json = text.trim() === "" ? {} : JSON.parse(text);

    return NextResponse.json(json);
  } catch (error) {
    return NextResponse.json(
      {
        error: "Error al consultar reservas de hoy",
        message: (error as Error).message,
      },
      { status: 500 }
    );
  }
}

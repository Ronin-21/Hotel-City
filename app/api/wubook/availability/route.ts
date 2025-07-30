import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch(
      "https://kapi.wubook.net/reservations/v1/availability/",
      {
        headers: {
          Authorization: `Bearer wb_cdde1dca-6d98-11f0-a990-001a4a4ef9b1`,
          /* Authorization: `Bearer ${process.env.WUBOOK_API_KEY}`, */
          "Content-Type": "application/json",
        },
      }
    );

    const text = await res.text(); // leemos como texto para ver el error exacto

    if (!res.ok) {
      return NextResponse.json(
        {
          error: "Error desde WuBook",
          status: res.status,
          response: text,
        },
        { status: 500 }
      );
    }

    const data = JSON.parse(text);
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      {
        error: "Excepción en el servidor",
        message: (error as Error).message,
      },
      { status: 500 }
    );
  }
}

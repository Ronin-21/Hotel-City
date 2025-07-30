"use client";

import { useEffect, useState } from "react";

export default function ReservasPage() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    fetch("/api/wubook/availability")
      .then((res) => res.json())
      .then((data) => {
        setRooms(data.rooms || []);
      });
  }, []);

  return (
    <section className="px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Disponibilidad</h1>
      <ul className="space-y-4">
        {rooms.map((room: any) => (
          <li key={room.id} className="p-4 border rounded shadow">
            <h2 className="text-xl font-semibold">{room.name}</h2>
            <p>Disponibilidad: {room.availability.join(", ")}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

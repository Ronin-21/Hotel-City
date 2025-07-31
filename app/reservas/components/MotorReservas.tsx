"use client";

import { useState } from "react";

const MotorReservas = () => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchReservations = async () => {
    setLoading(true);
    setError(null);
    setData(null);

    try {
      const res = await fetch("/api/wubook/availability", {
        method: "POST",
      });

      const json = await res.json();

      if (!res.ok) throw new Error(json.message || "Error desconocido");
      setData(json);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full min-h-screen px-4 py-10 bg-transparent">
      <div className="max-w-xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4 mt-20">
          Reservas de Hoy (WuBook)
        </h1>

        <button
          onClick={fetchReservations}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Cargar Reservas de Hoy
        </button>

        {loading && <p className="mt-4 text-gray-500">Cargando...</p>}
        {error && <p className="mt-4 text-red-600">Error: {error}</p>}
        {data && (
          <pre className="mt-4 p-4 bg-gray-100 rounded overflow-auto max-h-[400px]">
            {JSON.stringify(data, null, 2)}
          </pre>
        )}
      </div>
    </section>
  );
};
export default MotorReservas;

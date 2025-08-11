"use client";
import { useState } from "react";
import emailjs from "emailjs-com";

export default function ContactForm() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleEmail = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_xxxxxx", // tu service_id
        "template_xxxxxx", // tu template_id
        form,
        "public_key_xxxxxx" // tu public_key
      )
      .then(() => alert("✅ Mensaje enviado por Email"))
      .catch(() => alert("❌ Error al enviar el mensaje"));
  };

  return (
    <div className="flex flex-col items-center w-full max-w-2xl p-8 bg-white rounded-lg shadow-lg mb-10">
      <form onSubmit={handleEmail} className="w-full space-y-4">
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={form.nombre}
          onChange={handleChange}
          className="w-full p-3 border border-dark/30 text-dark rounded-lg focus:outline-none focus:ring-1 focus:ring-primary/75 caret-primary placeholder:text-primary/50"
        />
        <input
          type="email"
          name="email"
          placeholder="Correo Electrónico"
          value={form.email}
          onChange={handleChange}
          className="w-full p-3 border border-dark/30 text-dark rounded-lg focus:outline-none focus:ring-1 focus:ring-primary/75 caret-primary placeholder:text-primary/50"
        />
        <textarea
          name="mensaje"
          placeholder="Mensaje"
          value={form.mensaje}
          onChange={handleChange}
          className="w-full p-3 border border-dark/30 text-dark rounded-lg focus:outline-none focus:ring-1 focus:ring-primary/75 h-32 caret-primary placeholder:text-primary/50"
        ></textarea>
        <button
          type="submit"
          className="w-full px-6 py-3 text-lg font-medium text-white text-shadow-md text-shadow-black/30 transition-colors rounded-md bg-primary hover:bg-black shadow-md shadow-black/50 cursor-pointer"
        >
          Enviar por Email
        </button>
      </form>
    </div>
  );
}

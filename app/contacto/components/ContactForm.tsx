"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import emailjs from "emailjs-com";

interface FormState {
  [key: string]: string;
  nombre: string;
  email: string;
  mensaje: string;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    nombre: "",
    email: "",
    mensaje: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validación simple
    if (!form.nombre.trim() || !form.email.trim() || !form.mensaje.trim()) {
      alert("Por favor completá todos los campos.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(form.email)) {
      alert("Por favor ingresá un correo electrónico válido.");
      return;
    }

    setLoading(true);
    emailjs
      .send(
        "service_xxxxxx", // tu service_id
        "template_xxxxxx", // tu template_id
        form,
        "public_key_xxxxxx" // tu public_key
      )
      .then(() => {
        alert("✅ Mensaje enviado por Email");
        setForm({ nombre: "", email: "", mensaje: "" }); // limpiar formulario
      })
      .catch(() => alert("❌ Error al enviar el mensaje"))
      .finally(() => setLoading(false));
  };

  return (
    <div className="flex flex-col items-center w-full max-w-2xl p-8 bg-white rounded-lg shadow-lg mb-10">
      <form onSubmit={handleEmail} className="w-full space-y-4" noValidate>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={form.nombre}
          onChange={handleChange}
          className="w-full p-3 border border-dark/30 text-dark rounded-lg focus:outline-none focus:ring-1 focus:ring-primary/75 caret-primary placeholder:text-primary/50"
          required
          disabled={loading}
        />
        <input
          type="email"
          name="email"
          placeholder="Correo Electrónico"
          value={form.email}
          onChange={handleChange}
          className="w-full p-3 border border-dark/30 text-dark rounded-lg focus:outline-none focus:ring-1 focus:ring-primary/75 caret-primary placeholder:text-primary/50"
          required
          disabled={loading}
        />
        <textarea
          name="mensaje"
          placeholder="Mensaje"
          value={form.mensaje}
          onChange={handleChange}
          className="w-full p-3 border border-dark/30 text-dark rounded-lg focus:outline-none focus:ring-1 focus:ring-primary/75 h-32 caret-primary placeholder:text-primary/50"
          required
          disabled={loading}
        />
        <button
          type="submit"
          className="w-full px-6 py-3 text-lg font-medium text-white text-shadow-md text-shadow-black/30 transition-colors rounded-md bg-primary hover:bg-black shadow-md shadow-black/50 cursor-pointer disabled:cursor-not-allowed disabled:bg-gray-400"
          disabled={loading}
        >
          {loading ? "Enviando..." : "Enviar por Email"}
        </button>
      </form>
    </div>
  );
}

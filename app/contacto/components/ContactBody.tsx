import ContactForm from "./ContactForm";

const ContactBody = () => {
  return (
    <div className="container flex flex-col items-center justify-center min-h-screen gap-10 mx-auto my-20 py-20">
      <h2 className="text-5xl font-bold text-primary font-title text-shadow-sm text-shadow-dark/30">
        Estamos acá para ayudarte
      </h2>
      <p className="text-center text-dark max-w-2xl mb-10 text-lg">
        ¿Tenés preguntas, querés hacer una reserva o necesitás más información?
        Contactanos por cualquiera de estos medios y te responderemos lo antes
        posible:
      </p>
      <p className="text-center text-dark/75 max-w-2xl">
        Completa nuestro formulario y nos pondremos en contacto a la brevedad
      </p>
      {/* Contact Form Section */}
      <ContactForm />
      {/* Google Maps */}
      <div className="h-[500px] w-full bg-amber-200">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3539.0370848899406!2d-64.86340659999999!3d-27.499222099999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x943b521378c65963%3A0xf814b188c049c219!2sCity%20Hotel!5e0!3m2!1ses-419!2sar!4v1753915553394!5m2!1ses-419!2sar"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Ubicación Hotel City"
        />
      </div>
    </div>
  );
};

export default ContactBody;

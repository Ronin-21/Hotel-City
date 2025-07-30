const ContactBody = () => {
  return (
    <div className="container flex flex-col items-center justify-center min-h-screen gap-10 mx-auto my-20">
      <h2 className="text-5xl text-primary font-semibold font-title">
        Contacto
      </h2>
      <p className="text-center text-gray-700 max-w-2xl mb-10 text-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias illum
        dicta cupiditate, laudantium voluptatem animi ipsam nemo laboriosam
        impedit voluptates!
      </p>
      {/* Contact Form Section */}
      <div className="flex flex-col items-center w-full max-w-2xl p-8 bg-white rounded-lg shadow-lg mb-10">
        <form className="w-full space-y-4">
          <input
            type="text"
            placeholder="Nombre"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <input
            type="email"
            placeholder="Correo Electrónico"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <textarea
            placeholder="Mensaje"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary h-32"
          ></textarea>
          <button
            type="submit"
            className="w-full px-6 py-3 text-white bg-primary rounded-lg hover:bg-primary-dark transition-colors"
          >
            Enviar Mensaje
          </button>
        </form>
      </div>
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

function ContactSection() {
  return (
    <section
      id="contact"
      className="bg-gradient-to-r from-orange-100 to-purple-100 px-5 md:px-10 flex flex-col py-10 items-center scroll-mt-14 md:scroll-mt-20"
    >
      <div className="container mx-auto px-6 md:px-12 text-center">
        <div className="flex flex-col items-center mb-5 gap-2">
          <h2 className="text-2xl md:text-5xl font-bold text-gray-800">
            Hubungi Kami
          </h2>
          <div className="h-1 w-20 md:w-32 bg-orangeCustome rounded-lg"></div>
        </div>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Nama Anda"
            className="p-3 rounded-lg border border-gray-300 shadow-md"
          />
          <input
            type="email"
            placeholder="Email Anda"
            className="p-3 rounded-lg border border-gray-300 shadow-md"
          />
          <textarea
            placeholder="Pesan Anda"
            rows={4}
            className="p-3 rounded-lg border border-gray-300 shadow-md"
          ></textarea>
          <button
            type="submit"
            className="bg-orange-400 text-white py-3 rounded-lg shadow-lg hover:bg-orange-200 transition"
            onClick={() => {
              alert("Maaf ini masih dummy");
            }}
          >
            Kirim Pesan
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactSection;

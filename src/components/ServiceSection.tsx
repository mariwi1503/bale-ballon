function ServicesSection() {
  const services = [
    {
      title: "Dekorasi Pernikahan",
      description: "Mewujudkan pernikahan impian Anda.",
    },
    {
      title: "Dekorasi Syukuran",
      description: "Mewujudkan syukuran anda jadi penuh khidmat.",
    },
    {
      title: "Dekorasi Aqikah",
      description: "Membuat acara menjadi lebih istimewa.",
    },
    {
      title: "Dekorasi Acara Korporat",
      description: "Dekorasi profesional untuk acara perusahaan Anda.",
    },
  ];

  return (
    <section
      id="service"
      className="bg-gradient-to-r from-green-100 to-red-100 px-5 md:px-10 flex flex-col py-10 items-center scroll-mt-14 md:scroll-mt-20"
    >
      <div className="flex flex-col items-center mb-10 gap-2">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-800">
          Layanan Kami
        </h2>
        <div className="h-1 w-40 md:w-56 bg-orangeCustome rounded-lg"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gradient-to-b from-blue-50 to-pink-50 rounded-lg shadow-lg p-6 text-center"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              {service.title}
            </h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ServicesSection;

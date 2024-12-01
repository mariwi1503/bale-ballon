function TestimonialsSection() {
  const testimonials = [
    { name: "Ayu", feedback: "Dekorasinya luar biasa, sangat memuaskan!" },
    {
      name: "Budi",
      feedback: "Tim yang sangat profesional dan hasilnya memukau!",
    },
    { name: "Citra", feedback: "Saya sangat senang dengan hasil dekorasinya." },
  ];

  return (
    <section
      id="testimonial"
      className="bg-gradient-to-r from-green-100 to-red-100 px-5 md:px-10 flex flex-col py-10 items-center scroll-mt-14 md:scroll-mt-20"
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center mb-5 gap-2">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800">
            Testimoni
          </h2>
          <div className="h-1 w-20 md:w-32 bg-orangeCustome rounded-lg"></div>
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 w-full md:w-1/3 text-center"
            >
              <p className="text-gray-600 italic">"{testimonial.feedback}"</p>
              <h4 className="text-gray-800 font-bold mt-4">
                {testimonial.name}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;

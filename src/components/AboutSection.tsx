function AboutSection() {
  return (
    <section
      id="about"
      className="bg-gradient-to-r from-yellow-100 to-green-100 px-5 md:px-10 flex flex-col py-10 items-center"
    >
      <div className="w-1/2 md:w-1/4">
        <img src="/images/bismillah.png" alt="" />
      </div>
      <div className="flex flex-col md:flex-row gap-y-10 py-5 text-center">
        {/* Left Column */}
        <div className="w-full flex flex-col items-center justify-center">
          <div className="md:w-2/3">
            <div className="flex flex-col items-center mb-10 gap-2">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-800">
                Tentang Kami
              </h2>
              <div className="h-1 w-40 md:w-56 bg-orangeCustome rounded-lg"></div>
            </div>
            <p className="text-xl md:hidden">
              Kami adalah tim kreatif yang berkomitmen untuk membuat momen
              spesial Anda menjadi tak terlupakan. Dengan pengalaman
              bertahun-tahun dalam dekorasi acara, kami mengutamakan kualitas,
              kreativitas, dan kepuasan pelanggan.
            </p>
            <p className="mt-4 text-center relative text-3xl leading-relaxed hidden md:block">
              <span className="text-8xl font-bold opacity-50 absolute -left-4 -top-2">
                “
              </span>
              Kami adalah tim kreatif yang berkomitmen untuk membuat momen
              spesial Anda menjadi tak terlupakan. Dengan pengalaman
              bertahun-tahun dalam dekorasi acara, kami mengutamakan kualitas,
              kreativitas, dan kepuasan pelanggan.
              <span className="text-8xl font-bold opacity-50 absolute -right-4 -bottom-2">
                ”
              </span>
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full flex items-center justify-center md:py-5">
          <img src="/images/owner.jpg" className="rounded-xl" alt="" />
        </div>
      </div>
    </section>
  );
}

export default AboutSection;

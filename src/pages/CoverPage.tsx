import { Link } from "react-router-dom";

function CoverPage() {
  return (
    <section
      className="relative flex flex-col justify-end md:justify-center h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/bb3.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        // backgroundPosition: "45% 30%",
      }}
    >
      <div className="max-w-16 md:max-w-44 absolute left-2 top-2 md:left-auto md:right-7 md:top-5 md:bg-white md:p-2 rounded-full">
        <img src="/icon.png" alt="" />
      </div>
      {/* Konten Hero */}
      <div className="p-5 md:p-10 rounded-xl text-white max-w-3xl bg-slate-600 bg-opacity-40 md:bg-transparent md:bg-opacity-0">
        <h1 className="text-4xl md:text-8xl font-bold mb-4">
          Hiasi Momen Spesial Anda!
        </h1>
        <p className="text-lg md:text-2xl mb-6">
          Layanan dekorasi terbaik untuk acara anda yang berharga dan penuh
          ceria.
        </p>
        <Link to="/home">
          <button className="px-6 py-3 bg-orange-400 text-lg font-semibold rounded-full hover:bg-orange-300 transition duration-300">
            Lihat Detail
          </button>
        </Link>
      </div>
    </section>
  );
}

export default CoverPage;

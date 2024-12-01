function FAQSection() {
  const faqs = [
    {
      question: "Berapa lama proses dekorasi?",
      answer:
        "Waktu pengerjaan tergantung pada jenis acara, rata-rata 3-5 jam.",
    },
    {
      question: "Apakah menerima custom desain?",
      answer: "Tentu! Kami dapat menyesuaikan dekorasi sesuai keinginan Anda.",
    },
    {
      question: "Bagaimana cara pemesanan?",
      answer:
        "Anda dapat menghubungi kami melalui formulir di website atau WhatsApp.",
    },
  ];

  return (
    <section
      id="faq"
      className="bg-gradient-to-r from-blue-100 to-green-100 px-5 md:px-10 flex flex-col py-10 items-center scroll-mt-14 md:scroll-mt-20"
    >
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
          FAQ
        </h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-800">
                {faq.question}
              </h3>
              <p className="text-gray-600 mt-2">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQSection;

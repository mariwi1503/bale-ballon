import { useState } from "react";

const images = [
  "/images/bb1.jpg",
  "/images/bb8.jpg",
  "/images/bb2.jpg",
  "/images/bb3.jpg",
  "/images/bb4.jpg",
  "/images/bb5.jpg",
  "/images/bb6.jpg",
  "/images/bb7.jpg",
  "/images/bb9.jpg",
  "/images/bb10.jpg",
  "/images/bb11.jpg",
  "/images/bb12.jpg",
];

function GallerySection() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );

  const handlePrevious = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(
        selectedImageIndex === 0 ? images.length - 1 : selectedImageIndex - 1
      );
    }
  };

  const handleNext = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(
        selectedImageIndex === images.length - 1 ? 0 : selectedImageIndex + 1
      );
    }
  };

  return (
    <section
      id="gallery"
      className="bg-gradient-to-r from-purple-100 to-yellow-100 px-5 md:px-10 flex flex-col py-10 items-center h-screen scroll-mt-14 md:scroll-mt-20"
    >
      <div className="flex flex-col items-center mb-5 gap-2">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-800">Galeri</h2>
        <div className="h-1 w-20 md:w-32 bg-orangeCustome rounded-lg"></div>
      </div>
      <div className="p-4 grid grid-cols-3 md:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Gallery Image ${index + 1}`}
            className="w-full h-28 md:h-56 object-cover rounded-lg cursor-pointer hover:opacity-80 transition"
            onClick={() => setSelectedImageIndex(index)}
          />
        ))}

        {/* Modal */}
        {selectedImageIndex !== null && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
            {/* Close Modal */}
            <div
              className="absolute top-4 right-4 text-white text-2xl cursor-pointer"
              onClick={() => setSelectedImageIndex(null)}
            >
              ✖
            </div>

            {/* Image */}
            <img
              src={images[selectedImageIndex]}
              alt="Selected"
              className="max-w-full max-h-full rounded-lg"
            />

            {/* Navigation */}
            <button
              onClick={handlePrevious}
              className="absolute left-2  md:left-4 text-white text-lg md:text-3xl bg-black bg-opacity-50 p-2 rounded-md hover:bg-opacity-75"
            >
              ◀
            </button>
            <button
              onClick={handleNext}
              className="absolute right-2 md:right-4 text-white text-lg md:text-3xl bg-black bg-opacity-50 p-2 rounded-md hover:bg-opacity-75"
            >
              ▶
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default GallerySection;

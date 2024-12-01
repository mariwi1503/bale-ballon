import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
// import FAQSection from "../components/FAQSection";
import Footer from "../components/Footer";
import GallerySection from "../components/GallerySection";
import Navbar from "../components/Navbar";
import ServicesSection from "../components/ServiceSection";
import TestimonialsSection from "../components/TestimonialSection";

function HomePage() {
  return (
    <>
      <Navbar />
      <AboutSection />
      <ServicesSection />
      <GallerySection />
      <TestimonialsSection />
      {/* <FAQSection /> */}
      <ContactSection />
      <Footer />
    </>
  );
}

export default HomePage;

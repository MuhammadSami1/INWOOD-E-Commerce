import FeaturedSection from "../Components/FeaturedSection";
import HeroSection from "../Components/HeroSection";
import NewsLetter from "../Components/NewsLetter";
import PopularProducts from "../Components/PopularProducts";
import TestimonalsSection from "../Components/TestimonalsSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <PopularProducts />
      <FeaturedSection />
      <TestimonalsSection />
      <NewsLetter />
    </>
  );
};

export default Home;

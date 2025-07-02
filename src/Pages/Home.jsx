import Hero from "../component/UI/Hero";
import Offers from "../component/UI/Offers";
import Testimonials from "../component/UI/Testimonials";

const Home = () => {

  return (
    <div className="flex flex-col min-h-screen">
      <Hero />

      <Offers />

      <Testimonials />

    </div>
  );
};

export default Home;

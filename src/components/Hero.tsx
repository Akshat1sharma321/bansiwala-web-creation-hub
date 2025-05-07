
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative bg-gradient-to-r from-sweet-light to-sweet-accent/10 min-h-[90vh] flex items-center"
    >
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558326567-98166332163b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center opacity-10 z-0"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight text-sweet-dark">
              Authentic <span className="text-sweet">Indian Sweets</span> &
              Delicacies
            </h1>
            <p className="text-lg md:text-xl mb-6 text-sweet-dark/80">
              Handcrafted with love using traditional recipes passed down
              through generations. Experience the true taste of India.
            </p>
            <div className="flex space-x-4">
              <Button
                className="bg-sweet hover:bg-sweet-dark text-white"
                size="lg"
              >
                <a href="#products">Explore our Sweets</a>
              </Button>
              <Button variant="outline" size="lg">
                <a href="#contact">Contact Us</a>
              </Button>
            </div>
          </div>

          <div className="md:w-1/2 animate-float">
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-sweet rounded-full opacity-10 transform -translate-x-4 translate-y-4"></div>
              <img
                src="https://lh3.googleusercontent.com/p/AF1QipPO3kcKlwv7nsEJ8A6xgu1DaGE6rGJi0mhdnO0V=w141-h176-n-k-no-nu"
                alt="Delicious Indian sweets arrangement"
                className="rounded-full  w-full object-contain shadow-2xl border-8 border-white"
              />
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a
            href="#products"
            className="flex flex-col items-center text-sweet-dark/70 hover:text-sweet"
          >
            <span className="mb-2 text-sm">Scroll down</span>
            <ArrowDown size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

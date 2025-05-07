
import { Candy, CakeSlice, Utensils } from "lucide-react";

const features = [
  {
    icon: <Candy className="h-10 w-10 text-sweet" />,
    title: "Traditional Recipes",
    description: "Our sweets are crafted using traditional recipes passed down through generations, preserving authentic flavors.",
  },
  {
    icon: <CakeSlice className="h-10 w-10 text-sweet" />,
    title: "Fresh Ingredients",
    description: "We use only the finest and freshest ingredients, ensuring quality and taste in every bite.",
  },
  {
    icon: <Utensils className="h-10 w-10 text-sweet" />,
    title: "Handmade With Love",
    description: "Each sweet is handcrafted with care and attention to detail by our skilled confectioners.",
  },
];

const About = () => {
  return (
    <section id="about" className="section-padding bg-sweet-light">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <div className="relative">
              <div className="absolute inset-0 bg-sweet rounded-lg opacity-10 transform translate-x-4 translate-y-4"></div>
              <img 
                src="https://images.unsplash.com/photo-1603133872878-684f208fb84b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Bansiwala sweet shop" 
                className="rounded-lg shadow-xl relative z-10"
              />
            </div>
          </div>
          
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold mb-4 text-sweet-dark">About <span className="text-sweet">Bansiwala</span></h2>
            <p className="text-lg mb-6 text-sweet-dark/80">
              Established in 1975, Bansiwala has been delighting customers with authentic Indian sweets for over four decades. Our journey began with a small family shop and a passion for traditional sweets.
            </p>
            <p className="text-lg mb-6 text-sweet-dark/80">
              Today, we continue to honor our heritage by creating sweets using the same time-tested recipes while incorporating modern techniques to ensure consistency and quality.
            </p>
            <p className="text-lg mb-8 text-sweet-dark/80">
              Our mission is to spread joy through our authentic sweets and preserve the rich culinary tradition of Indian confectionery.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-5 rounded-lg shadow-md">
                  <div className="mb-3">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-sweet-dark">{feature.title}</h3>
                  <p className="text-sweet-dark/70">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;


import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductCard from "./ProductCard";

const productCategories = [
  { id: "all", name: "All" },
  { id: "ladoos", name: "Ladoos" },
  { id: "barfi", name: "Barfi" },
  { id: "jalebi", name: "Jalebi & Sweets" },
];

const products = [
  {
    id: 1,
    name: "Motichoor Ladoo",
    price: "220/kg",
    category: "ladoos",
    description: "Small sweet balls made from gram flour, soaked in sugar syrup.",
    image: "https://images.unsplash.com/photo-1606576036860-90296d391f97?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    popular: true,
  },
  {
    id: 2,
    name: "Kaju Katli",
    price: "800/kg",
    category: "barfi",
    description: "Diamond-shaped cashew fudge with a silver foil topping.",
    image: "https://images.unsplash.com/photo-1596459635994-81c7626072f7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    popular: true,
  },
  {
    id: 3,
    name: "Jalebi",
    price: "180/kg",
    category: "jalebi",
    description: "Deep-fried pretzel-shaped sweet soaked in syrup.",
    image: "https://images.unsplash.com/photo-1589125543713-8eade80deac4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    popular: false,
  },
  {
    id: 4,
    name: "Besan Ladoo",
    price: "320/kg",
    category: "ladoos",
    description: "Sweet balls made from gram flour, ghee and sugar.",
    image: "https://images.unsplash.com/photo-1615487303067-7fb0d6868e93?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    popular: false,
  },
  {
    id: 5,
    name: "Pista Barfi",
    price: "650/kg",
    category: "barfi",
    description: "Sweet treat made from condensed milk and pistachios.",
    image: "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    popular: true,
  },
  {
    id: 6,
    name: "Gulab Jamun",
    price: "340/kg",
    category: "jalebi",
    description: "Deep-fried milk solids soaked in rose-flavored syrup.",
    image: "https://images.unsplash.com/photo-1601303484246-56476d7cde231?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    popular: false,
  }
];

const Products = () => {
  const [activeTab, setActiveTab] = useState("all");

  const filteredProducts = activeTab === "all" 
    ? products 
    : products.filter(product => product.category === activeTab);

  return (
    <section id="products" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-sweet-dark">Our Delicious <span className="text-sweet">Sweets</span></h2>
          <p className="text-lg text-sweet-dark/70 max-w-2xl mx-auto">
            Explore our wide range of authentic Indian sweets, made fresh daily using traditional recipes passed down through generations.
          </p>
        </div>
        
        <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-sweet-light/50">
              {productCategories.map((category) => (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id}
                  className="data-[state=active]:bg-sweet data-[state=active]:text-white"
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          
          {productCategories.map((category) => (
            <TabsContent 
              key={category.id} 
              value={category.id}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  name={product.name}
                  price={product.price}
                  description={product.description}
                  image={product.image}
                  popular={product.popular}
                />
              ))}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Products;

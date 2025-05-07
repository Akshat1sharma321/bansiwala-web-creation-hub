
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  name: string;
  price: string;
  description: string;
  image: string;
  popular?: boolean;
}

const ProductCard = ({ name, price, description, image, popular }: ProductCardProps) => {
  return (
    <Card className="card-shadow overflow-hidden bg-white border border-sweet/10">
      <div className="relative h-48">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover"
        />
        {popular && (
          <Badge className="absolute top-2 right-2 bg-sweet text-white">
            Popular
          </Badge>
        )}
      </div>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle className="text-xl text-sweet-dark">{name}</CardTitle>
          <span className="font-bold text-sweet">₹{price}</span>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-sweet-dark/70">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default ProductCard;

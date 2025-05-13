import { useState } from 'react';
import { ShoppingCart } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  price: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden h-64">
        <img 
          src={product.imageUrl} 
          alt={product.name} 
          className={`w-full h-full object-cover transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
        />
        <div className={`absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 transition-opacity duration-300 ${isHovered ? 'opacity-100' : ''}`}>
          <button className="bg-green-600 text-white py-2 px-4 rounded-lg flex items-center transform -translate-y-4 transition-transform duration-300 hover:bg-green-700">
            <ShoppingCart className="w-5 h-5 mr-2" />
            Commander
          </button>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-green-600 font-bold">{product.price}</span>
          <span className="text-sm text-gray-500">En stock</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
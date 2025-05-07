
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex-shrink-0 flex items-center">
            <h1 className="text-2xl md:text-3xl font-bold text-sweet-dark font-dancing">
              Bansiwala <span className="text-sweet">Sweets</span>
            </h1>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-sweet-dark hover:text-sweet font-medium">
              Home
            </a>
            <a href="#products" className="text-sweet-dark hover:text-sweet font-medium">
              Our Sweets
            </a>
            <a href="#about" className="text-sweet-dark hover:text-sweet font-medium">
              About Us
            </a>
            <a href="#contact" className="text-sweet-dark hover:text-sweet font-medium">
              Contact
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-sweet-dark p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a 
              href="#home" 
              className="block px-3 py-2 text-sweet-dark hover:bg-sweet-light rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a 
              href="#products" 
              className="block px-3 py-2 text-sweet-dark hover:bg-sweet-light rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Our Sweets
            </a>
            <a 
              href="#about" 
              className="block px-3 py-2 text-sweet-dark hover:bg-sweet-light rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </a>
            <a 
              href="#contact" 
              className="block px-3 py-2 text-sweet-dark hover:bg-sweet-light rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

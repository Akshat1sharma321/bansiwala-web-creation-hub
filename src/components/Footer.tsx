
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-sweet-dark text-white">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 font-dancing">Bansiwala Sweets</h3>
            <p className="text-white/70 mb-4">
              Delighting customers with authentic Indian sweets since 1975. Handcrafted with love using traditional recipes.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-white/70 hover:text-sweet transition-colors">Home</a></li>
              <li><a href="#products" className="text-white/70 hover:text-sweet transition-colors">Our Sweets</a></li>
              <li><a href="#about" className="text-white/70 hover:text-sweet transition-colors">About Us</a></li>
              <li><a href="#contact" className="text-white/70 hover:text-sweet transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="bg-white/10 hover:bg-sweet p-2 rounded-full transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/></svg>
              </a>
              <a href="#" className="bg-white/10 hover:bg-sweet p-2 rounded-full transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5.01 14.99c-1.64 1.64-3.82 2.54-6.01 2.54s-4.37-.9-6.01-2.54C3.35 15.36 2.46 13.18 2.46 11c0-2.19.89-4.37 2.54-6.01C6.63 3.35 8.81 2.46 11 2.46c2.19 0 4.37.89 6.01 2.54 1.64 1.64 2.54 3.82 2.54 6.01 0 2.18-.9 4.36-2.54 6z"/><circle cx="7" cy="11" r="2"/><circle cx="12" cy="11" r="2"/><circle cx="17" cy="11" r="2"/></svg>
              </a>
              <a href="#" className="bg-white/10 hover:bg-sweet p-2 rounded-full transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.22-1.13 6.93-.14.71-.42 1.34-.76 1.74-.17.2-.38.33-.63.33-.5 0-1.25-.38-1.9-.78l-1.5-.9c-.83-.5-1.44-.97-1.44-1.54 0-.18.09-.35.21-.43l2.98-2.7c.44-.4.56-.95.33-1.3-.23-.35-.75-.48-1.25-.29l-3.5 1.34c-.45.17-.81.53-.81 1.01 0 .51.32.93.83 1.26l2.76 1.75c.65.42 1.33.82 1.85 1.07.58.28 1.12.43 1.63.43.74 0 1.37-.23 1.86-.69.54-.51.94-1.26 1.18-2.24.46-1.86 1.16-5.26 1.32-6.86.03-.29-.09-.54-.37-.61-.33-.08-.67.11-.75.43z"/></svg>
              </a>
              <a href="#" className="bg-white/10 hover:bg-sweet p-2 rounded-full transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5.01 14.99c-1.64 1.64-3.82 2.54-6.01 2.54s-4.37-.9-6.01-2.54C3.35 15.36 2.46 13.18 2.46 11c0-2.19.89-4.37 2.54-6.01C6.63 3.35 8.81 2.46 11 2.46c2.19 0 4.37.89 6.01 2.54 1.64 1.64 2.54 3.82 2.54 6.01 0 2.18-.9 4.36-2.54 6z"/><path d="M9 8l6 4.03L9 16v-8z"/></svg>
              </a>
            </div>
            
            <div className="mt-6">
              <p className="text-white/70">123 Sweetness Lane</p>
              <p className="text-white/70">Jaipur, Rajasthan 302001</p>
              <p className="text-white/70">+91 9876543210</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 mb-4 md:mb-0">© {currentYear} Bansiwala Sweets. All rights reserved.</p>
          
          <div className="flex space-x-4">
            <a href="#" className="text-white/70 hover:text-sweet text-sm">Privacy Policy</a>
            <a href="#" className="text-white/70 hover:text-sweet text-sm">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Side: Brand and Info Section */}
          <div className="flex flex-col items-start space-y-6">
            <div>
              <h2 className="text-2xl font-bold">AppleVerse</h2>
              <p className="text-xs text-gray-400">Lets Taste and Apple</p>
              <p className="text-gray-400 mt-4">
                Apple Verse is the largest Apple Products Seller in Sri Lanka and we strive to bring the Apple products you love closer to you.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">AppleVerse - Nugegoda Branch</h3>
              <p>No.11C, Lane, Nugegoda</p>
              <p>+94778998789</p>
              <p>+94778998790</p>
            </div>
            <button className="bg-gray-600 py-2 px-4 rounded">Find Location</button>
            {/* Social Links */}
            <div className="flex space-x-4 mt-4">
              <a href="#" className="hover:text-gray-400">
                <i className="fab fa-facebook-f"></i> {/* Facebook icon */}
              </a>
              <a href="#" className="hover:text-gray-400">
                <i className="fab fa-instagram"></i> {/* Instagram icon */}
              </a>
              <a href="#" className="hover:text-gray-400">
                <i className="fab fa-linkedin-in"></i> {/* LinkedIn icon */}
              </a>
              <a href="#" className="hover:text-gray-400">
                <i className="fab fa-whatsapp"></i> {/* WhatsApp icon */}
              </a>
              <a href="#" className="hover:text-gray-400">
                <i className="fab fa-youtube"></i> {/* YouTube icon */}
              </a>
            </div>
          </div>

          {/* Middle: Categories Section */}
          <div>
            <h3 className="text-xl font-semibold">Categories</h3>
            <ul className="mt-4 space-y-2">
              <li>Iphone</li>
              <li>iPad</li>
              <li>iWatch</li>
              <li>Mac</li>
              <li>Airpods</li>
              <li>AirTags</li>
            </ul>
          </div>

          {/* Right Side: Pages Section */}
          <div>
            <h3 className="text-xl font-semibold">Pages</h3>
            <ul className="mt-4 space-y-2">
              <li>Home</li>
              <li>About</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>

        {/* Bottom Links */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400 text-sm">
          <div className="flex justify-center space-x-8">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Return / Refund</a>
            <a href="#" className="hover:text-white">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

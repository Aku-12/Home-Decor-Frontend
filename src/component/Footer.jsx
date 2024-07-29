import { FaFacebook, FaInstagram, FaTwitter, FaGooglePlay, FaApple } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="footer" className="bg-gray-100 text-gray-800 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="mb-6">
            <h1 className="text-4xl font-bold mb-4">
              <span className="text-black">Furni</span>
              <span className="text-red-500">Ture</span>
            </h1>
            <p className="text-gray-600 mb-4">
              Discover premium furniture for every room in your home.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-gray-600 hover:text-blue-600 transition-colors" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="w-6 h-6" />
              </a>
              <a href="https://instagram.com" className="text-gray-600 hover:text-pink-600 transition-colors" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="w-6 h-6" />
              </a>
              <a href="https://twitter.com" className="text-gray-600 hover:text-blue-400 transition-colors" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="/about" className="text-gray-600 hover:text-gray-800 transition-colors">About Us</a></li>
              <li><a href="/careers" className="text-gray-600 hover:text-gray-800 transition-colors">Careers</a></li>
              <li><a href="/blog" className="text-gray-600 hover:text-gray-800 transition-colors">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="/faq" className="text-gray-600 hover:text-gray-800 transition-colors">FAQ</a></li>
              <li><a href="/support" className="text-gray-600 hover:text-gray-800 transition-colors">Support Center</a></li>
              <li><a href="/contact" className="text-gray-600 hover:text-gray-800 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Download Our App</h4>
            <div className="space-y-4">
              <a href="https://play.google.com/store" className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors" target="_blank" rel="noopener noreferrer">
                <FaGooglePlay className="w-6 h-6" />
                <span>Google Play</span>
              </a>
              <a href="https://apps.apple.com" className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors" target="_blank" rel="noopener noreferrer">
                <FaApple className="w-6 h-6" />
                <span>App Store</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8 text-center">
          <p className="text-gray-600">
            &copy; {new Date().getFullYear()}{" "}
            <span className="font-bold text-black">Furni</span>
            <span className="font-bold text-red-500">Ture</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
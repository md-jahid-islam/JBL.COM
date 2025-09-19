import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
 
 // ============ Footer =========== // 
 const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 px-4 sm:px-6 md:px-10 py-8 text-sm">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 border-b border-gray-700 pb-10">
          {/* SHOP */}
          <div>
            <h4 className="text-white font-semibold mb-4">SHOP</h4>
            <ul className="space-y-2">
              <li>Featured</li>
              <li>Headphones</li>
              <li>Gaming</li>
              <li>Speakers</li>
              <li>Soundbars</li>
              <li>Professional</li>
              <li>Offer Zone</li>
            </ul>
          </div>

          {/* SUPPORT */}
          <div>
            <h4 className="text-white font-semibold mb-4">SUPPORT</h4>
            <ul className="space-y-2">
              <li>Order Status</li>
              <li>Bulk Purchase Program</li>
              <li>Buy Authentic</li>
              <li>Product Support</li>
              <li>Paperless Warranty</li>
              <li>Shipping & Delivery policy</li>
              <li>Cancellation & Refund Policy</li>
              <li>Service Center</li>
              <li>Brand Stores</li>
              <li>Store Locator</li>
            </ul>
          </div>

          {/* ABOUT US */}
          <div>
            <h4 className="text-white font-semibold mb-4">ABOUT US</h4>
            <ul className="space-y-2">
              <li>Harman Corporate</li>
              <li>Privacy Policy</li>
              <li>Cookie Policy</li>
              <li>Cookie Settings</li>
              <li>Warranty Policy</li>
              <li>Terms of use</li>
              <li>Why Buy Direct</li>
              <li>JBL Sound Partners</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div className="sm:col-span-2">
            <h4 className="text-white font-semibold mb-4">CONTACT US</h4>
            <p>
              1800-102-0525
              <br />
              Mon - Sun: 8:00 am - 6:00 pm (IST)
            </p>
            <br />
            <p className="font-semibold">Manufactured by:</p>
            <p>
              Harman International Industries, Inc.
              <br />8500, Balboa Blvd.
              <br />Northridge, CA 91329, USA
            </p>
            <br />
            <p className="font-semibold">Imported by:</p>
            <p>
              Harman International (India) Pvt. Ltd.
              <br />
              Bangalore - 560048, Karnataka, India.
            </p>
            <br />
            <p className="text-orange-500 font-semibold">
              PRODUCT COUNTRY OF ORIGIN
            </p>
            <p>India/China/Vietnam/Malaysia</p>
            <br />
            <p className="text-green-500 font-semibold">SUSTAINABILITY 🌱</p>
            <p>Follow Our Efforts</p>
          </div>

          {/* SOCIAL MEDIA */}
          <div>
            <h4 className="text-white font-semibold mb-4">FOLLOW US</h4>
            <div className="flex space-x-4 text-white text-xl">
              <a href="#" className="hover:text-blue-500 transition">
                <FaFacebookF />
              </a>
              <a href="#" className="hover:text-sky-400 transition">
                <FaTwitter />
              </a>
              <a href="#" className="hover:text-pink-500 transition">
                <FaInstagram />
              </a>
              <a href="#" className="hover:text-red-500 transition">
                <FaYoutube />
              </a>
              <a href="#" className="hover:text-gray-300 transition">
                <MdEmail />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500 text-center md:text-left">
            © 2025 Harman International Industries, Incorporated. All rights
            reserved.
          </p>
          <div className="flex flex-wrap justify-center md:justify-end gap-4">
            <img src="/path/to/akg-logo.png" alt="AKG" className="h-4" />
            <img src="/path/to/jbl-logo.png" alt="JBL" className="h-4" />
            {/* Add more logos if needed */}
          </div>
        </div>
      </div>
    </footer>
  );
 };

 export default Footer;

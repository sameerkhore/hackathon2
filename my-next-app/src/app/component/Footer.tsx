import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <div className="bg-gray-800 text-white py-6">
      <div className="w-full max-w-[1200px] mx-auto px-4">
        {/* Footer Top */}
        <div className="flex justify-between">
          <div>
            <h3 className="text-xl font-semibold mb-2">Company</h3>
            <ul>
              <li><Link href="/about" className="hover:text-gray-400">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-gray-400">Contact</Link></li>
              <li><Link href="/privacy" className="hover:text-gray-400">Privacy Policy</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
            <ul>
              <li><Link href="/faq" className="hover:text-gray-400">FAQ</Link></li>
              <li><Link href="/shipping" className="hover:text-gray-400">Shipping & Returns</Link></li>
              <li><Link href="/terms" className="hover:text-gray-400">Terms & Conditions</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
            <div className="flex gap-4">
              <Link href="https://facebook.com" className="text-white hover:text-blue-600"><FaFacebookF /></Link>
              <Link href="https://twitter.com" className="text-white hover:text-blue-400"><FaTwitter /></Link>
              <Link href="https://instagram.com" className="text-white hover:text-pink-600"><FaInstagram /></Link>
              <Link href="https://linkedin.com" className="text-white hover:text-blue-800"><FaLinkedinIn /></Link>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-6 text-center text-sm">
          <p>&copy; 2024 Sameer Khore. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

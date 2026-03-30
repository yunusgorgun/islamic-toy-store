import { Link } from "react-router";
import { Heart, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-emerald-900 to-teal-800 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-white/10 p-2 rounded-lg">
                <Heart className="size-6 fill-white" />
              </div>
              <div>
                <div className="font-semibold">Little Hearts</div>
                <div className="text-sm text-emerald-200">Islamic Toys</div>
              </div>
            </div>
            <p className="text-emerald-100 text-sm">
              Nurturing young hearts with faith, love, and learning through beautiful handcrafted toys.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/products" className="text-emerald-100 hover:text-white transition-colors">
                  Our Products
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-emerald-100 hover:text-white transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link to="/vision" className="text-emerald-100 hover:text-white transition-colors">
                  Vision & Values
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-emerald-100 hover:text-white transition-colors">
                  Resources
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4">For Parents</h3>
            <ul className="space-y-2 text-sm text-emerald-100">
              <li>Educational Tips</li>
              <li>Islamic Learning</li>
              <li>Product Care Guide</li>
              <li>Age Guide</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Get in Touch</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Mail className="size-4 mt-0.5 text-emerald-300" />
                <span className="text-emerald-100">hello@littlehearts.com</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="size-4 mt-0.5 text-emerald-300" />
                <span className="text-emerald-100">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="size-4 mt-0.5 text-emerald-300" />
                <span className="text-emerald-100">Made with love from our family workshop</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-emerald-700 mt-8 pt-8 text-center text-sm text-emerald-200">
          <p>© 2026 Little Hearts Islamic Toys. Crafted with love for your little ones.</p>
        </div>
      </div>
    </footer>
  );
}

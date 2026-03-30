import { Link, useLocation } from "react-router";
import { Moon, Menu, X, ShoppingBag } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export function Navigation() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/products", label: "Products" },
    { path: "/about", label: "Our Story" },
    { path: "/vision", label: "Vision" },
    { path: "/resources", label: "Resources" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-emerald-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="bg-gradient-to-br from-emerald-700 to-teal-800 p-2 rounded-xl group-hover:scale-105 transition-transform shadow-sm">
              <Moon className="size-5 text-amber-300 fill-amber-300" />
            </div>
            <div>
              <div className="font-bold text-emerald-900 text-lg leading-none tracking-tight">Sweet Moon</div>
              <div className="text-xs text-emerald-500 leading-none mt-0.5">Islamic Products</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-0.5">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors relative ${
                    isActive ? "text-emerald-700" : "text-gray-600 hover:text-emerald-600"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-emerald-50 rounded-lg -z-10"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Shop CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <a
              href="https://sweetmoon.us"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors shadow-sm"
            >
              <ShoppingBag className="size-4" />
              Shop Now
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-emerald-700 rounded-lg hover:bg-emerald-50 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-emerald-100"
          >
            <div className="px-4 py-3 space-y-1">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-4 py-3 rounded-xl text-sm font-medium ${
                      isActive
                        ? "bg-emerald-50 text-emerald-700"
                        : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <a
                href="https://sweetmoon.us"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 mt-2 px-4 py-3 bg-emerald-700 text-white rounded-xl text-sm font-semibold"
              >
                <ShoppingBag className="size-4" />
                Shop on sweetmoon.us
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

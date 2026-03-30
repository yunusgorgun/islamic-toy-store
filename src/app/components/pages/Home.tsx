import { Link } from "react-router";
import { Moon, Star, Sparkles, ArrowRight, BookOpen, Heart, Gift, ShoppingBag } from "lucide-react";
import { motion } from "motion/react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function Home() {
  const featuredProducts = [
    {
      id: 1,
      name: "Ramadan Legacy Planner",
      description: "A powerful, practical planner with reflective exercises for a truly meaningful Ramadan journey.",
      image: "https://images.unsplash.com/photo-1517971071642-34a2d3ecc9cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      price: "$30.00",
      badge: "Best Seller",
      badgeColor: "bg-amber-500",
      category: "Planners & Journals",
    },
    {
      id: 2,
      name: "My Little Legacy: Kids Journal",
      description: "A fun Ramadan journal & activity book designed specially for Muslim children.",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      price: "$32.00",
      badge: "For Kids",
      badgeColor: "bg-teal-600",
      category: "Kids",
    },
    {
      id: 3,
      name: "Muslim Culture Book Set",
      description: "Award-winning books by Hena Khan celebrating Muslim culture, family, and identity.",
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      price: "$15.00",
      badge: "Educational",
      badgeColor: "bg-emerald-600",
      category: "Books",
    },
  ];

  const values = [
    {
      icon: BookOpen,
      title: "Educational",
      description: "Engaging children with Islamic culture, art, history, and civilization",
      color: "from-emerald-500 to-teal-600",
    },
    {
      icon: Heart,
      title: "Family First",
      description: "Helping families create meaningful moments and lasting Ramadan memories",
      color: "from-rose-500 to-pink-600",
    },
    {
      icon: Star,
      title: "Inspiring",
      description: "Sparking curiosity and love for Islamic heritage in young minds",
      color: "from-amber-500 to-orange-500",
    },
    {
      icon: Gift,
      title: "Thoughtful Gifts",
      description: "Perfect for Ramadan, Eid, and every meaningful family occasion",
      color: "from-violet-500 to-purple-600",
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-emerald-950 via-emerald-900 to-teal-800 text-white overflow-hidden min-h-[90vh] flex items-center">
        {/* Geometric circles */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-20 right-20 size-96 rounded-full border-2 border-white" />
          <div className="absolute top-36 right-36 size-64 rounded-full border-2 border-white" />
          <div className="absolute -bottom-24 -left-24 size-96 rounded-full border-2 border-white" />
        </div>
        {/* Moon decoration */}
        <div className="absolute top-10 right-10 opacity-10 pointer-events-none">
          <Moon className="size-56 text-amber-200 fill-amber-100" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full mb-8"
              >
                <Moon className="size-4 text-amber-300 fill-amber-300" />
                <span className="text-sm text-amber-200 font-medium">Est. March 2019 · Omaha, Nebraska</span>
              </motion.div>

              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
                Designing
                <span className="block text-amber-300">Lifetime</span>
                <span className="block">Ramadan</span>
                <span className="block text-emerald-300">Memories</span>
              </h1>

              <p className="text-xl text-emerald-100 mb-10 max-w-lg leading-relaxed">
                Beautiful Islamic products crafted to help Muslim families engage, inspire, and educate their children about Islamic culture, art, and heritage.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/products"
                  className="group inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-emerald-950 font-bold px-8 py-4 rounded-xl transition-all shadow-lg hover:shadow-amber-500/30 hover:shadow-xl"
                >
                  Explore Products
                  <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="https://sweetmoon.us"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-8 py-4 rounded-xl transition-all"
                >
                  <ShoppingBag className="size-4" />
                  Shop Online
                </a>
              </div>

              {/* Stats */}
              <div className="mt-12 flex items-center gap-8">
                <div>
                  <div className="text-2xl font-bold text-amber-300">2019</div>
                  <div className="text-xs text-emerald-300 uppercase tracking-wide">Founded</div>
                </div>
                <div className="w-px h-10 bg-white/20" />
                <div>
                  <div className="text-2xl font-bold text-amber-300">Ramadan</div>
                  <div className="text-xs text-emerald-300 uppercase tracking-wide">Focused</div>
                </div>
                <div className="w-px h-10 bg-white/20" />
                <div>
                  <div className="text-2xl font-bold text-amber-300">Family</div>
                  <div className="text-xs text-emerald-300 uppercase tracking-wide">Owned</div>
                </div>
              </div>
            </motion.div>

            {/* Hero image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/50">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900"
                  alt="Ramadan memories"
                  className="w-full h-[560px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/50 to-transparent" />
              </div>

              {/* Floating card — bottom left */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="absolute -bottom-5 -left-5 bg-white text-emerald-900 p-5 rounded-2xl shadow-2xl"
              >
                <div className="flex items-center gap-3">
                  <div className="bg-amber-100 p-3 rounded-xl">
                    <Moon className="size-5 text-amber-600 fill-amber-500" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-sm">Sweet Moon</div>
                    <div className="text-xs text-gray-500">Ramadan memories since 2019</div>
                  </div>
                </div>
              </motion.div>

              {/* Floating badge — top right */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute -top-4 -right-4 bg-emerald-800 text-white p-4 rounded-2xl shadow-xl"
              >
                <div className="flex gap-0.5 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="size-3 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <div className="text-xs font-semibold">Family Loved</div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 56" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0 56L60 46C120 36 240 16 360 11C480 6 600 16 720 21C840 26 960 26 1080 21C1200 16 1320 6 1380 1L1440 0V56H0Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-4xl font-bold text-emerald-900 mb-4">Why Families Love Sweet Moon</h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
              More than products — building bridges to Islamic heritage for the next generation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 hover:bg-white p-7 rounded-2xl hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100 group"
              >
                <div className={`bg-gradient-to-br ${value.color} p-3 rounded-xl w-fit mb-5 shadow-sm`}>
                  <value.icon className="size-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 via-white to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12"
          >
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="size-5 text-amber-500" />
                <span className="text-sm font-bold text-amber-600 uppercase tracking-widest">Featured</span>
              </div>
              <h2 className="text-4xl font-bold text-emerald-900">Our Collections</h2>
            </div>
            <Link
              to="/products"
              className="mt-4 sm:mt-0 inline-flex items-center gap-1 text-emerald-600 hover:text-emerald-700 font-semibold group"
            >
              View all products
              <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 group border border-gray-100"
              >
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={product.image}
                    alt={product.name}
                    className="size-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
                  <div className={`absolute top-4 left-4 ${product.badgeColor} text-white text-xs font-bold px-3 py-1.5 rounded-full`}>
                    {product.badge}
                  </div>
                  <div className="absolute top-4 right-4 bg-white text-emerald-900 font-bold px-3 py-1.5 rounded-full text-sm shadow-md">
                    {product.price}
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-xs font-bold text-emerald-600 uppercase tracking-widest mb-2">
                    {product.category}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-500 text-sm mb-5 leading-relaxed">{product.description}</p>
                  <a
                    href="https://sweetmoon.us/collections/all"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-emerald-600 hover:text-emerald-700 font-semibold text-sm group/link"
                  >
                    Shop on sweetmoon.us
                    <ArrowRight className="size-3 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Banner */}
      <section className="py-24 bg-gradient-to-br from-emerald-900 to-teal-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-0 right-0 size-96 rounded-full border-2 border-white transform translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 size-64 rounded-full border-2 border-white transform -translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Moon className="size-16 mx-auto mb-8 text-amber-400 fill-amber-300" />
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl text-emerald-100 mb-4 leading-relaxed max-w-3xl mx-auto">
              Sweet Moon was founded to provide resources enabling families to{" "}
              <strong className="text-amber-300">engage</strong>,{" "}
              <strong className="text-amber-300">inspire</strong>, and{" "}
              <strong className="text-amber-300">educate</strong> their children about Islamic culture, art, history, and civilization.
            </p>
            <p className="text-emerald-300 mb-10 text-sm">
              Based in Omaha, Nebraska — serving Muslim families across the United States since 2019.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-8 py-4 rounded-xl transition-all"
              >
                Read Our Story
              </Link>
              <a
                href="https://sweetmoon.us"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-emerald-950 font-bold px-8 py-4 rounded-xl transition-all"
              >
                <ShoppingBag className="size-4" />
                Shop Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-white">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Sparkles className="size-10 text-amber-500 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-emerald-900 mb-3">Stay Connected</h2>
            <p className="text-gray-500 mb-8">
              Subscribe for Ramadan tips, Islamic learning resources, and exclusive offers
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-5 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-gray-900"
              />
              <button className="bg-emerald-700 hover:bg-emerald-800 text-white px-7 py-3.5 rounded-xl font-semibold transition-colors shadow-sm whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

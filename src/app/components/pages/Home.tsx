import { Link } from "react-router";
import { Heart, Star, Sparkles, Users, BookOpen, Shield } from "lucide-react";
import { motion } from "motion/react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function Home() {
  const featuredProducts = [
    {
      id: 1,
      name: "Arabic Alphabet Blocks",
      description: "Beautiful wooden blocks with Arabic letters and illustrations",
      image: "https://images.unsplash.com/photo-1725297951080-47e72ef3f788?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      price: "$34.99",
      ageRange: "2-5 years"
    },
    {
      id: 2,
      name: "Prayer Time Learning Set",
      description: "Interactive set teaching children about Salah times",
      image: "https://images.unsplash.com/photo-1647621129185-cc09bc212ff1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      price: "$29.99",
      ageRange: "4-8 years"
    },
    {
      id: 3,
      name: "Islamic Storybook Collection",
      description: "Beautifully illustrated books with inspiring Islamic stories",
      image: "https://images.unsplash.com/photo-1773213075043-86954c638a98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      price: "$44.99",
      ageRange: "3-7 years"
    },
  ];

  const values = [
    {
      icon: Heart,
      title: "Made with Love",
      description: "Every toy is handcrafted by our family with care and attention to detail"
    },
    {
      icon: BookOpen,
      title: "Educational",
      description: "Designed to teach Islamic values and knowledge through play"
    },
    {
      icon: Shield,
      title: "Safe & Quality",
      description: "Using natural, non-toxic materials that are safe for children"
    },
    {
      icon: Users,
      title: "Family Values",
      description: "Supporting families in raising children with strong faith and character"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-50 via-teal-50 to-orange-50 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1771057761766-6b78fe492a29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
            alt="Islamic Pattern"
            className="size-full object-cover"
          />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <Sparkles className="size-4 text-amber-500" />
                <span className="text-sm text-emerald-700">Family-crafted Islamic toys</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-emerald-900 mb-6">
                Nurturing Young Hearts with Faith & Joy
              </h1>
              
              <p className="text-xl text-gray-700 mb-8">
                Discover beautifully handcrafted toys that teach Islamic values, inspire learning, 
                and bring joy to your children's playtime. Made with love from our family to yours.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/products"
                  className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-lg hover:from-emerald-700 hover:to-teal-700 transition-all shadow-lg hover:shadow-xl"
                >
                  Explore Our Toys
                </Link>
                <Link
                  to="/about"
                  className="bg-white text-emerald-700 px-8 py-4 rounded-lg hover:bg-emerald-50 transition-colors border-2 border-emerald-200"
                >
                  Our Story
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1640117870130-a35c8203a9e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                  alt="Happy children playing with Islamic toys"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              
              {/* Floating Card */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="bg-amber-100 p-3 rounded-lg">
                    <Star className="size-6 text-amber-600 fill-amber-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">100+ Families</div>
                    <div className="text-sm text-gray-600">Trust our toys</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-emerald-900 mb-4">
              Why Families Choose Us
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're not just making toys – we're helping families nurture faith and create lasting memories
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-xl hover:shadow-lg transition-shadow"
              >
                <div className="bg-white p-3 rounded-lg w-fit mb-4">
                  <value.icon className="size-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-emerald-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-emerald-900 mb-4">
              Featured Collections
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Carefully crafted toys that combine fun with Islamic learning
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
              >
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={product.image}
                    alt={product.name}
                    className="size-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {product.price}
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-emerald-600 mb-2">
                    Ages {product.ageRange}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {product.description}
                  </p>
                  <Link
                    to="/products"
                    className="text-emerald-600 hover:text-emerald-700 font-semibold inline-flex items-center gap-1"
                  >
                    Learn More
                    <span>→</span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/products"
              className="inline-block bg-emerald-600 text-white px-8 py-4 rounded-lg hover:bg-emerald-700 transition-colors"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-600 to-teal-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Heart className="size-16 mx-auto mb-6 fill-white" />
            <h2 className="text-4xl font-bold mb-4">
              Join Our Growing Family
            </h2>
            <p className="text-xl text-emerald-100 mb-8">
              Subscribe to receive parenting tips, Islamic learning resources, and special offers
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
              <button className="bg-amber-500 hover:bg-amber-600 px-8 py-4 rounded-lg font-semibold transition-colors">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

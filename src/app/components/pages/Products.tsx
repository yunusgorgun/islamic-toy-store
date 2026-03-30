import { motion } from "motion/react";
import { BookOpen, Blocks, Heart, Palette, Star, Gift } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function Products() {
  const categories = [
    {
      id: 1,
      name: "Learning & Education",
      icon: BookOpen,
      description: "Interactive toys that teach Arabic, Quran verses, and Islamic knowledge",
      products: [
        {
          name: "Arabic Alphabet Blocks",
          description: "Wooden blocks with letters, words, and beautiful illustrations",
          price: "$34.99",
          image: "https://images.unsplash.com/photo-1725297951080-47e72ef3f788?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
          ages: "2-5 years"
        },
        {
          name: "Quran Verse Puzzle Set",
          description: "Engaging puzzles featuring short surahs and their meanings",
          price: "$28.99",
          image: "https://images.unsplash.com/photo-1773213075043-86954c638a98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
          ages: "4-8 years"
        },
        {
          name: "Islamic Story Books",
          description: "Beautifully illustrated stories of prophets and Islamic values",
          price: "$44.99",
          image: "https://images.unsplash.com/photo-1647621129185-cc09bc212ff1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
          ages: "3-7 years"
        }
      ]
    },
    {
      id: 2,
      name: "Prayer & Worship",
      icon: Heart,
      description: "Toys that introduce children to the beauty of Islamic worship",
      products: [
        {
          name: "My First Prayer Mat Set",
          description: "Soft, colorful prayer mat with guidance for little ones",
          price: "$39.99",
          image: "https://images.unsplash.com/photo-1653290230795-64b812fa392c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
          ages: "3-7 years"
        },
        {
          name: "Prayer Time Learning Clock",
          description: "Interactive clock teaching salah times and daily routines",
          price: "$32.99",
          image: "https://images.unsplash.com/photo-1647621129185-cc09bc212ff1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
          ages: "4-10 years"
        },
        {
          name: "Wudu Practice Set",
          description: "Fun and educational set for learning ablution steps",
          price: "$26.99",
          image: "https://images.unsplash.com/photo-1628270251031-9262ac25387b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
          ages: "3-8 years"
        }
      ]
    },
    {
      id: 3,
      name: "Creative & Arts",
      icon: Palette,
      description: "Express creativity with Islamic art and calligraphy",
      products: [
        {
          name: "Calligraphy Starter Kit",
          description: "Complete set for learning beautiful Arabic calligraphy",
          price: "$36.99",
          image: "https://images.unsplash.com/photo-1773213075043-86954c638a98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
          ages: "6-12 years"
        },
        {
          name: "Islamic Pattern Craft Set",
          description: "Create stunning geometric Islamic patterns",
          price: "$29.99",
          image: "https://images.unsplash.com/photo-1771057761766-6b78fe492a29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
          ages: "5-10 years"
        },
        {
          name: "Mosque Building Blocks",
          description: "Wooden blocks to build beautiful mosque structures",
          price: "$48.99",
          image: "https://images.unsplash.com/photo-1560831340-b9679dc9e9f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
          ages: "4-10 years"
        }
      ]
    },
    {
      id: 4,
      name: "Special Collections",
      icon: Gift,
      description: "Curated gift sets perfect for special occasions",
      products: [
        {
          name: "Ramadan Joy Bundle",
          description: "Complete set for making Ramadan extra special",
          price: "$64.99",
          image: "https://images.unsplash.com/photo-1640117870130-a35c8203a9e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
          ages: "3-8 years"
        },
        {
          name: "New Muslim Baby Gift Set",
          description: "Beautiful collection for welcoming a new baby",
          price: "$54.99",
          image: "https://images.unsplash.com/photo-1628270251031-9262ac25387b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
          ages: "0-3 years"
        },
        {
          name: "Eid Celebration Kit",
          description: "Everything needed for a joyful Eid celebration",
          price: "$59.99",
          image: "https://images.unsplash.com/photo-1647621129185-cc09bc212ff1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
          ages: "4-10 years"
        }
      ]
    }
  ];

  return (
    <div className="bg-gradient-to-br from-emerald-50 to-teal-50 min-h-screen py-12">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-5xl font-bold text-emerald-900 mb-4">
            Our Toy Collections
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every toy is lovingly handcrafted in our family workshop using natural, 
            non-toxic materials. Designed to spark curiosity and nurture faith.
          </p>
        </motion.div>
      </div>

      {/* Categories */}
      {categories.map((category, categoryIndex) => (
        <section key={category.id} className="mb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Category Header */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-gradient-to-br from-emerald-600 to-teal-600 p-3 rounded-lg">
                  <category.icon className="size-8 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-emerald-900">
                    {category.name}
                  </h2>
                  <p className="text-gray-600">{category.description}</p>
                </div>
              </div>
            </motion.div>

            {/* Products Grid */}
            <div className="grid md:grid-cols-3 gap-6">
              {category.products.map((product, productIndex) => (
                <motion.div
                  key={product.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: productIndex * 0.1 }}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all group"
                >
                  <div className="relative h-64 overflow-hidden">
                    <ImageWithFallback
                      src={product.image}
                      alt={product.name}
                      className="size-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 bg-amber-500 text-white px-3 py-1.5 rounded-full font-semibold">
                      {product.price}
                    </div>
                    <div className="absolute top-4 left-4 bg-emerald-600 text-white px-3 py-1.5 rounded-full text-sm">
                      {product.ages}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {product.description}
                    </p>
                    <div className="flex items-center gap-2">
                      <button className="flex-1 bg-emerald-600 text-white py-2 px-4 rounded-lg hover:bg-emerald-700 transition-colors">
                        Add to Cart
                      </button>
                      <button className="bg-emerald-50 text-emerald-600 p-2 rounded-lg hover:bg-emerald-100 transition-colors">
                        <Heart className="size-5" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Quality Promise */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Star className="size-12 text-amber-500 fill-amber-500 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-emerald-900 mb-4">
              Our Quality Promise
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              All our toys are made with natural wood, non-toxic paints, and eco-friendly materials. 
              Every piece is quality-checked by our family to ensure it meets our high standards 
              of safety and craftsmanship.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="bg-emerald-50 px-6 py-3 rounded-full text-emerald-700 font-semibold">
                ✓ Natural Materials
              </div>
              <div className="bg-emerald-50 px-6 py-3 rounded-full text-emerald-700 font-semibold">
                ✓ Non-Toxic Paints
              </div>
              <div className="bg-emerald-50 px-6 py-3 rounded-full text-emerald-700 font-semibold">
                ✓ Safety Tested
              </div>
              <div className="bg-emerald-50 px-6 py-3 rounded-full text-emerald-700 font-semibold">
                ✓ Handcrafted with Care
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

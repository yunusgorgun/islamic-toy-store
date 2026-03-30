import { motion } from "motion/react";
import { Moon, BookOpen, Shirt, Star, Gift, ShoppingBag, ExternalLink } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

type Product = {
  name: string;
  description: string;
  price: string;
  image: string;
  soldOut?: boolean;
  tag: string;
};

type Category = {
  id: number;
  name: string;
  icon: React.ElementType;
  description: string;
  products: Product[];
};

export function Products() {
  const categories: Category[] = [
    {
      id: 1,
      name: "Ramadan Planners & Journals",
      icon: Moon,
      description: "Powerful, reflective planners for adults and activity journals for children",
      products: [
        {
          name: "Emerald Edition Ramadan Legacy Planner",
          description: "A beautifully designed planner with powerful reflective exercises for self-understanding and spiritual goal-setting throughout Ramadan.",
          price: "$30.00",
          image: "https://images.unsplash.com/photo-1517971071642-34a2d3ecc9cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
          soldOut: true,
          tag: "Emerald Edition",
        },
        {
          name: "Night Edition Ramadan Legacy Planner",
          description: "A stunning night-themed Ramadan planner designed for evening reflection and deep spiritual growth.",
          price: "$30.00",
          image: "https://images.unsplash.com/photo-1535463731090-e77cb41a6aa7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
          soldOut: true,
          tag: "Night Edition",
        },
        {
          name: "Paradise Green Edition Ramadan Legacy Planner",
          description: "Inspired by the gardens of paradise — a serene, uplifting planner for your most meaningful Ramadan yet.",
          price: "$30.00",
          image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
          soldOut: true,
          tag: "Paradise Edition",
        },
        {
          name: "Rose Edition Ramadan Legacy Planner",
          description: "Elegant rose design with meaningful prompts to guide your spiritual journey throughout the blessed month.",
          price: "$30.00",
          image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
          soldOut: true,
          tag: "Rose Edition",
        },
        {
          name: "My Little Legacy: Ramadan Kids Journal & Activity Book",
          description: "A fun-filled Ramadan journal specially crafted for children — activities, reflections, and memories all in one beautiful book.",
          price: "$32.00",
          image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
          soldOut: true,
          tag: "For Kids",
        },
      ],
    },
    {
      id: 2,
      name: "Books",
      icon: BookOpen,
      description: "Educational books celebrating Islamic culture, history, and civilization for young readers",
      products: [
        {
          name: "Muslim Civilization Set by National Geographic Kids",
          description: "An engaging National Geographic Kids series exploring the rich history and extraordinary contributions of Muslim civilizations.",
          price: "$18.00",
          image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
          tag: "National Geographic Kids",
        },
        {
          name: "Muslim Culture Set by Hena Khan",
          description: "Award-winning books by celebrated author Hena Khan that beautifully portray Muslim culture, family, and values for young readers.",
          price: "$15.00",
          image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
          tag: "By Hena Khan",
        },
      ],
    },
    {
      id: 3,
      name: "Ramadan Apparel",
      icon: Shirt,
      description: "Meaningful Ramadan t-shirts and sweatshirts carrying messages of kindness, strength, and peace",
      products: [
        {
          name: "#BeKind, #BeStrong — Ramadan Premium T-Shirt",
          description: "A premium Ramadan tee with an empowering message of kindness and strength. Wear your values this Ramadan.",
          price: "$20.00",
          image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
          tag: "T-Shirt",
        },
        {
          name: "Peace Be Upon You — Ramadan Premium T-Shirt",
          description: "Spread the Islamic greeting of peace wherever you go this Ramadan with this beautiful premium tee.",
          price: "$20.00",
          image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
          tag: "T-Shirt",
        },
        {
          name: "Be Kind, Be Strong — Ramadan Long Sleeve T-Shirt",
          description: "Stay warm and inspired this Ramadan with our long-sleeve version of the beloved Be Kind, Be Strong design.",
          price: "$23.00",
          image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
          tag: "Long Sleeve",
        },
        {
          name: "Be Kind, Be Strong — Ramadan Sweatshirt",
          description: "Cozy and meaningful — a perfect sweatshirt for Ramadan nights. Wear your values all season long.",
          price: "$30.00",
          image: "https://images.unsplash.com/photo-1556821840-3a63f15732ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
          tag: "Sweatshirt",
        },
      ],
    },
    {
      id: 4,
      name: "The Ramadan Village Collection",
      icon: Star,
      description: "Handmade egg caps for Sahoor fun — bringing magic and tradition to your family table",
      products: [
        {
          name: "Early Birds of the Ramadan Village",
          description: "Charming handmade egg caps celebrating the early risers of Sahoor — a sweet Ramadan tradition for the family breakfast table.",
          price: "$15.00",
          image: "https://images.unsplash.com/photo-1601524909162-ae8725290836?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
          tag: "Handmade",
        },
        {
          name: "Flowers of the Ramadan Village",
          description: "Beautiful floral-themed egg caps that bring color, joy, and beauty to your Sahoor table this Ramadan.",
          price: "$15.00",
          image: "https://images.unsplash.com/photo-1490750967868-88df5691cc0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
          tag: "Handmade",
        },
        {
          name: "Heroes of the Ramadan Village",
          description: "Celebrate the heroes of Ramadan with these fun, character-inspired handmade egg caps loved by kids.",
          price: "$15.00",
          image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
          tag: "Baby & Toddler",
        },
      ],
    },
    {
      id: 5,
      name: "Gift Wrapping",
      icon: Gift,
      description: "Make your Sweet Moon gift extra special",
      products: [
        {
          name: "Gift Wrapping",
          description: "Add a special touch to any Sweet Moon purchase with beautiful gift wrapping — perfect for Ramadan gifts, Eid celebrations, and every meaningful occasion.",
          price: "$4.00",
          image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
          tag: "Add-on",
        },
      ],
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Header */}
      <div className="bg-gradient-to-br from-emerald-950 via-emerald-900 to-teal-800 text-white py-20 relative overflow-hidden">
        <div className="absolute top-6 right-10 opacity-10 pointer-events-none">
          <Moon className="size-44 text-amber-200 fill-amber-100" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-2 rounded-full mb-6">
              <ShoppingBag className="size-4 text-amber-300" />
              <span className="text-sm text-amber-200 font-medium">Sweet Moon Collections</span>
            </div>
            <h1 className="text-5xl font-bold mb-4">All Products</h1>
            <p className="text-xl text-emerald-100 mb-8 max-w-2xl">
              Designed to help Muslim families create meaningful Ramadan memories — planners, books, apparel, and more.
            </p>
            <a
              href="https://sweetmoon.us/collections/all"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-emerald-950 font-bold px-8 py-4 rounded-xl transition-all shadow-lg"
            >
              <ShoppingBag className="size-4" />
              Shop on sweetmoon.us
              <ExternalLink className="size-4" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {categories.map((category) => (
          <section key={category.id} className="mb-20">
            {/* Category Header */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-8 pb-5 border-b border-gray-100"
            >
              <div className="bg-gradient-to-br from-emerald-600 to-teal-700 p-3 rounded-xl shadow-sm">
                <category.icon className="size-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-emerald-900">{category.name}</h2>
                <p className="text-gray-500 text-sm">{category.description}</p>
              </div>
            </motion.div>

            {/* Products Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.products.map((product, productIndex) => (
                <motion.div
                  key={product.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: productIndex * 0.07 }}
                  className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="relative h-52 overflow-hidden bg-gray-50">
                    <ImageWithFallback
                      src={product.image}
                      alt={product.name}
                      className={`size-full object-cover transition-transform duration-500 ${product.soldOut ? "grayscale-[30%]" : "group-hover:scale-105"}`}
                    />
                    {product.soldOut && (
                      <div className="absolute inset-0 bg-gray-900/40 flex items-center justify-center">
                        <span className="bg-white text-gray-800 font-bold px-4 py-2 rounded-full text-sm shadow">
                          Sold Out
                        </span>
                      </div>
                    )}
                    {!product.soldOut && (
                      <div className="absolute top-3 left-3 bg-emerald-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                        {product.tag}
                      </div>
                    )}
                    {product.soldOut && (
                      <div className="absolute bottom-3 left-3 bg-black/50 text-white text-xs font-medium px-3 py-1 rounded-full">
                        {product.tag}
                      </div>
                    )}
                  </div>
                  <div className="p-5">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="text-base font-bold text-gray-900 leading-snug">{product.name}</h3>
                      <span className="text-emerald-700 font-bold text-sm shrink-0">{product.price}</span>
                    </div>
                    <p className="text-gray-500 text-sm mb-4 leading-relaxed line-clamp-2">{product.description}</p>
                    {product.soldOut ? (
                      <span className="text-sm text-gray-400 font-medium">Currently Unavailable</span>
                    ) : (
                      <a
                        href="https://sweetmoon.us/collections/all"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-600 hover:text-emerald-700 transition-colors group/link"
                      >
                        View on Shop
                        <ExternalLink className="size-3 group-hover/link:translate-x-0.5 transition-transform" />
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Shop CTA */}
      <section className="bg-gradient-to-br from-emerald-900 to-teal-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Moon className="size-12 text-amber-400 fill-amber-300 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-3">Ready to Shop?</h2>
            <p className="text-emerald-200 mb-8 text-lg">
              Visit sweetmoon.us to browse the full collection and place your order
            </p>
            <a
              href="https://sweetmoon.us"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-emerald-950 font-bold px-10 py-4 rounded-xl transition-all shadow-lg"
            >
              <ShoppingBag className="size-5" />
              Visit sweetmoon.us
              <ExternalLink className="size-4" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

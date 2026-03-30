import { motion } from "motion/react";
import { BookOpen, Heart, Lightbulb, Download, ExternalLink } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function Resources() {
  const blogPosts = [
    {
      id: 1,
      title: "Teaching Arabic Letters Through Play: A Parent's Guide",
      excerpt: "Discover fun and effective ways to introduce Arabic alphabet to young children using everyday activities and toys.",
      category: "Education",
      image: "https://images.unsplash.com/photo-1773213075043-86954c638a98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      readTime: "5 min read",
      date: "March 15, 2026"
    },
    {
      id: 2,
      title: "Making Salah Time Special for Little Ones",
      excerpt: "Creative ideas to help children develop a love for prayer from an early age through positive associations and gentle encouragement.",
      category: "Worship",
      image: "https://images.unsplash.com/photo-1653290230795-64b812fa392c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      readTime: "7 min read",
      date: "March 10, 2026"
    },
    {
      id: 3,
      title: "Ramadan Activities for Toddlers and Preschoolers",
      excerpt: "Age-appropriate activities to make Ramadan meaningful and engaging for your youngest family members.",
      category: "Celebrations",
      image: "https://images.unsplash.com/photo-1640117870130-a35c8203a9e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      readTime: "6 min read",
      date: "March 5, 2026"
    },
    {
      id: 4,
      title: "Building Islamic Character Through Storytelling",
      excerpt: "How to use stories from the Quran and Sunnah to teach values like honesty, kindness, and patience.",
      category: "Character Building",
      image: "https://images.unsplash.com/photo-1647621129185-cc09bc212ff1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      readTime: "8 min read",
      date: "February 28, 2026"
    },
    {
      id: 5,
      title: "The Benefits of Wooden Toys for Child Development",
      excerpt: "Understanding why natural, simple toys are often the best choice for children's cognitive and creative growth.",
      category: "Parenting",
      image: "https://images.unsplash.com/photo-1725297951080-47e72ef3f788?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      readTime: "5 min read",
      date: "February 20, 2026"
    },
    {
      id: 6,
      title: "Creating an Islamic Learning Corner at Home",
      excerpt: "Practical tips for designing a dedicated space where children can explore Islamic books, toys, and activities.",
      category: "Home Organization",
      image: "https://images.unsplash.com/photo-1560831340-b9679dc9e9f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      readTime: "6 min read",
      date: "February 15, 2026"
    }
  ];

  const downloadables = [
    {
      title: "Arabic Alphabet Coloring Pages",
      description: "Beautiful coloring sheets featuring each Arabic letter with illustrations",
      type: "PDF",
      icon: Download
    },
    {
      title: "Daily Dua Poster for Kids",
      description: "Colorful poster with simple, everyday duas children can learn",
      type: "PDF",
      icon: Download
    },
    {
      title: "Islamic Values Activity Book",
      description: "Fun activities teaching honesty, kindness, gratitude, and more",
      type: "PDF",
      icon: Download
    },
    {
      title: "Prayer Time Chart",
      description: "Printable chart to help children track their daily prayers",
      type: "PDF",
      icon: Download
    }
  ];

  const externalResources = [
    {
      title: "Quran for Kids",
      description: "Age-appropriate Quranic stories and teachings",
      url: "#"
    },
    {
      title: "Islamic Parenting Tips",
      description: "Guidance on raising children with strong Islamic values",
      url: "#"
    },
    {
      title: "Muslim Family Activities",
      description: "Ideas for family bonding through Islamic practices",
      url: "#"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-emerald-50 to-teal-50 min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-br from-emerald-600 to-teal-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <BookOpen className="size-16 mx-auto mb-6" />
            <h1 className="text-5xl font-bold mb-4">
              Resources for Parents
            </h1>
            <p className="text-xl text-emerald-50 max-w-3xl mx-auto">
              Tips, guides, and resources to support you on your Islamic parenting journey
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl font-bold text-emerald-900 mb-4">
              Latest Articles
            </h2>
            <p className="text-xl text-gray-600">
              Practical advice and inspiration from our family to yours
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all group cursor-pointer"
              >
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={post.image}
                    alt={post.title}
                    className="size-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {post.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {post.excerpt}
                  </p>
                  <button className="text-emerald-600 hover:text-emerald-700 font-semibold inline-flex items-center gap-1">
                    Read More
                    <span>→</span>
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Downloadable Resources */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Download className="size-12 text-emerald-600 mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-emerald-900 mb-4">
              Free Downloadables
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Printable activities and resources to use at home with your children
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {downloadables.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-xl hover:shadow-lg transition-all cursor-pointer group"
              >
                <div className="bg-emerald-600 p-3 rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform">
                  <resource.icon className="size-6 text-white" />
                </div>
                <div className="text-xs font-semibold text-emerald-600 mb-2">
                  {resource.type}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">
                  {resource.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {resource.description}
                </p>
                <button className="text-emerald-600 hover:text-emerald-700 font-semibold text-sm inline-flex items-center gap-1">
                  Download
                  <Download className="size-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* External Resources */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <ExternalLink className="size-12 text-emerald-600 mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-emerald-900 mb-4">
              Recommended Resources
            </h2>
            <p className="text-xl text-gray-600">
              Trusted external resources we recommend to families
            </p>
          </motion.div>

          <div className="space-y-4">
            {externalResources.map((resource, index) => (
              <motion.a
                key={resource.title}
                href={resource.url}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center justify-between bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all group"
              >
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-gray-600">
                    {resource.description}
                  </p>
                </div>
                <ExternalLink className="size-6 text-emerald-600 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-600 to-teal-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Lightbulb className="size-16 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-4">
              Get Weekly Parenting Tips
            </h2>
            <p className="text-xl text-emerald-50 mb-8">
              Join our newsletter for Islamic parenting advice, activity ideas, and special offers
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
            <p className="text-sm text-emerald-200 mt-4">
              No spam, unsubscribe anytime. We respect your privacy.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Heart className="size-12 text-rose-500 fill-rose-500 mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-emerald-900 mb-4">
              Quick Parenting Tips
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-xl"
            >
              <div className="text-4xl mb-4">🌙</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Start Small
              </h3>
              <p className="text-gray-600">
                Introduce Islamic concepts gradually through play. Even 10 minutes a day of focused Islamic learning makes a big difference.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-orange-50 to-amber-50 p-8 rounded-xl"
            >
              <div className="text-4xl mb-4">⭐</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Be Consistent
              </h3>
              <p className="text-gray-600">
                Create daily routines around Islamic practices. Children thrive on consistency and rituals give them security.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-rose-50 to-pink-50 p-8 rounded-xl"
            >
              <div className="text-4xl mb-4">💚</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Make it Joyful
              </h3>
              <p className="text-gray-600">
                Associate Islamic learning with positive emotions. Use praise, encouragement, and celebrations to build love for faith.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

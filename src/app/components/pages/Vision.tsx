import { motion } from "motion/react";
import { Target, Heart, Lightbulb, Globe, Shield, Users, BookOpen, Sparkles } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function Vision() {
  const mission = [
    {
      icon: Heart,
      title: "Faith-Centered Play",
      description: "Create toys that naturally integrate Islamic values and teachings into children's daily play and learning"
    },
    {
      icon: Users,
      title: "Supporting Families",
      description: "Empower Muslim parents with tools to nurture their children's Islamic identity from an early age"
    },
    {
      icon: Shield,
      title: "Quality & Safety",
      description: "Ensure every toy meets the highest standards of safety, using only natural and non-toxic materials"
    },
    {
      icon: Globe,
      title: "Building Community",
      description: "Connect Muslim families worldwide through shared values and the joy of meaningful play"
    }
  ];

  const values = [
    {
      icon: BookOpen,
      title: "Education Through Play",
      description: "We believe children learn best when they're having fun. Our toys are designed to make Islamic education an enjoyable, natural part of childhood.",
      color: "from-emerald-500 to-teal-600"
    },
    {
      icon: Heart,
      title: "Love & Compassion",
      description: "Every toy is made with love – from our family to yours. We pour our hearts into creating pieces that will be cherished for years.",
      color: "from-rose-500 to-pink-600"
    },
    {
      icon: Sparkles,
      title: "Excellence in Craft",
      description: "We honor traditional craftsmanship while embracing innovation. Each toy reflects our commitment to quality and attention to detail.",
      color: "from-amber-500 to-orange-600"
    },
    {
      icon: Users,
      title: "Family First",
      description: "As a family business, we understand the importance of family bonds. Our toys are designed to bring families together.",
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: Lightbulb,
      title: "Innovation & Creativity",
      description: "We constantly explore new ways to make Islamic learning engaging and exciting for modern children.",
      color: "from-purple-500 to-violet-600"
    },
    {
      icon: Globe,
      title: "Sustainable Practice",
      description: "We care for the Earth Allah has entrusted to us by using eco-friendly materials and sustainable practices.",
      color: "from-green-500 to-emerald-600"
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-teal-600 via-emerald-600 to-green-700 text-white py-20">
        <div className="absolute inset-0 opacity-10">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1771057761766-6b78fe492a29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
            alt="Pattern"
            className="size-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <Target className="size-16 mx-auto mb-6" />
            <h1 className="text-5xl font-bold mb-6">Our Vision & Values</h1>
            <p className="text-xl text-emerald-50">
              Dreaming of a world where every Muslim child has access to beautiful, 
              meaningful toys that nurture their faith and spark their imagination
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold text-emerald-900 mb-6">
              Our Vision for the Future
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              We envision a world where Muslim children grow up with toys that celebrate their 
              heritage, teach them about their faith, and inspire them to be confident, 
              compassionate individuals. Where Islamic values are woven naturally into the 
              fabric of childhood play, creating strong foundations for lifelong faith.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed">
              Our dream is to become not just a toy company, but a trusted companion for Muslim 
              families on their parenting journey – providing resources, building community, 
              and creating moments of joy that families will treasure forever.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-emerald-900 mb-4">
              Our Mission
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              What we're committed to achieving every single day
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {mission.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="bg-gradient-to-br from-emerald-500 to-teal-600 p-4 rounded-lg w-fit mb-4">
                  <item.icon className="size-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-lg">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-emerald-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all h-full border-2 border-transparent hover:border-emerald-200">
                  <div className={`bg-gradient-to-br ${value.color} p-3 rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform`}>
                    <value.icon className="size-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-emerald-900 mb-6">
                The Impact We Dream Of
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-emerald-600 text-white rounded-full p-2 mt-1">
                    <Heart className="size-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-1">
                      Confident Muslim Identity
                    </h3>
                    <p className="text-gray-600">
                      Children who are proud of their faith and comfortable expressing their Islamic identity
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-teal-600 text-white rounded-full p-2 mt-1">
                    <BookOpen className="size-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-1">
                      Joyful Learning
                    </h3>
                    <p className="text-gray-600">
                      Making Islamic education something children look forward to and enjoy
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-amber-600 text-white rounded-full p-2 mt-1">
                    <Users className="size-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-1">
                      Stronger Families
                    </h3>
                    <p className="text-gray-600">
                      Creating opportunities for quality family time centered around faith
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-rose-600 text-white rounded-full p-2 mt-1">
                    <Globe className="size-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-1">
                      Global Community
                    </h3>
                    <p className="text-gray-600">
                      Connecting Muslim families across the world through shared values and experiences
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1640117870130-a35c8203a9e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                  alt="Happy children learning"
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-emerald-600 to-teal-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Sparkles className="size-16 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-6">
              Join Our Journey
            </h2>
            <p className="text-xl text-emerald-50 mb-8">
              Every toy you choose, every moment your child spends learning through play, 
              brings us closer to our vision. Thank you for being part of our family's dream.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/products"
                className="bg-white text-emerald-700 px-8 py-4 rounded-lg hover:bg-emerald-50 transition-colors font-semibold"
              >
                Explore Our Toys
              </a>
              <a
                href="/contact"
                className="bg-amber-500 hover:bg-amber-600 px-8 py-4 rounded-lg transition-colors font-semibold"
              >
                Get in Touch
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

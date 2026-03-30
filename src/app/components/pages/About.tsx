import { motion } from "motion/react";
import { Heart, Users, Home, Sparkles } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function About() {
  const timeline = [
    {
      year: "2018",
      title: "A Dream Begins",
      description: "As new parents, we struggled to find quality Islamic toys for our children. We decided to create them ourselves in our small home workshop."
    },
    {
      year: "2020",
      title: "Growing Together",
      description: "What started as toys for our own children became a passion. Friends and family began requesting our handcrafted pieces."
    },
    {
      year: "2022",
      title: "Little Hearts is Born",
      description: "We officially launched Little Hearts, dedicated to helping Muslim families nurture their children's faith through play."
    },
    {
      year: "2026",
      title: "Serving Families Worldwide",
      description: "Today, we're blessed to serve over 100 families, with each toy still handcrafted with the same love and care."
    }
  ];

  const familyMembers = [
    {
      name: "Amira & Hassan",
      role: "Founders & Parents",
      description: "We started this journey as parents wanting the best for our children's Islamic education"
    },
    {
      name: "Grandma Fatima",
      role: "Master Seamstress",
      description: "Brings 40 years of crafting experience and endless love to every soft toy"
    },
    {
      name: "Uncle Yusuf",
      role: "Woodwork Artisan",
      description: "Creates beautiful wooden toys with precision and traditional craftsmanship"
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-emerald-600 to-teal-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <Heart className="size-16 mx-auto mb-6 fill-white" />
            <h1 className="text-5xl font-bold mb-6">Our Story</h1>
            <p className="text-xl text-emerald-100">
              A family's journey to create meaningful Islamic toys that bring joy, 
              learning, and faith into children's lives
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-emerald-900 mb-6">
                From Our Hearts to Yours
              </h2>
              <div className="space-y-4 text-lg text-gray-700">
                <p>
                  Our journey began in 2018 when we became parents. Like many Muslim families, 
                  we wanted toys that would not only entertain our children but also nurture 
                  their Islamic identity and values.
                </p>
                <p>
                  We searched everywhere but couldn't find toys that combined quality craftsmanship 
                  with authentic Islamic teachings. So we decided to make them ourselves.
                </p>
                <p>
                  What started in our small home workshop with a simple set of wooden alphabet blocks 
                  has grown into Little Hearts – a family business dedicated to creating meaningful, 
                  beautiful toys for Muslim children everywhere.
                </p>
                <p>
                  Every toy we create is touched by multiple members of our family. From Grandma Fatima's 
                  gentle stitching to Uncle Yusuf's precise woodwork, each piece carries our love, 
                  care, and prayers for the children who will play with them.
                </p>
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
                  src="https://images.unsplash.com/photo-1628270251031-9262ac25387b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                  alt="Our family workshop"
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-emerald-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600">
              Growing together, one toy at a time
            </p>
          </motion.div>

          <div className="space-y-12">
            {timeline.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-8 border-l-4 border-emerald-300"
              >
                <div className="absolute -left-4 top-0 bg-emerald-600 text-white size-8 rounded-full flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-emerald-600 font-semibold text-lg mb-2">
                    {milestone.year}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-gray-600">
                    {milestone.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Family Members */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Users className="size-12 text-emerald-600 mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-emerald-900 mb-4">
              Meet Our Family
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The loving hands behind every toy
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {familyMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-xl text-center"
              >
                <div className="bg-gradient-to-br from-emerald-600 to-teal-600 size-24 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Home className="size-12 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <div className="text-emerald-600 font-semibold mb-3">
                  {member.role}
                </div>
                <p className="text-gray-600">
                  {member.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Workshop Image */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-2xl"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1560831340-b9679dc9e9f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                alt="Our workshop"
                className="w-full h-[400px] object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Sparkles className="size-12 text-amber-500 mb-4" />
              <h2 className="text-3xl font-bold text-emerald-900 mb-4">
                Our Workshop
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Every morning, our workshop comes alive with the sounds of crafting, laughter, 
                and sometimes the pitter-patter of little feet (our own children love to "help"!). 
                It's a warm, welcoming space where tradition meets creativity.
              </p>
              <p className="text-lg text-gray-700">
                We believe in slow, intentional creation. Each toy takes time – time to select 
                the right materials, time to craft with precision, and time to ensure every 
                detail is perfect. Because we know these toys will become part of your family's 
                precious memories.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

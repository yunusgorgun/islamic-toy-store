import { motion } from "motion/react";
import { Moon, Target, Heart, BookOpen, Sparkles, ShoppingBag } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function About() {
  const mission = [
    {
      icon: BookOpen,
      title: "Educate",
      description: "Deepen children's knowledge of Islamic culture, art, history, and civilization through high-quality products",
    },
    {
      icon: Sparkles,
      title: "Inspire",
      description: "Inspire the next generation to take pride in their Islamic heritage and identity",
    },
    {
      icon: Heart,
      title: "Engage",
      description: "Create meaningful family experiences that bring parents and children closer through shared Islamic values",
    },
    {
      icon: Target,
      title: "Impact",
      description: "Increase youth engagement with the traditions and rich heritage of the Muslim world",
    },
  ];

  const milestones = [
    {
      year: "2019",
      label: "'19",
      title: "Sweet Moon is Founded",
      description: "Sweet Moon was established in March 2019 in Omaha, Nebraska — born from a desire to give Muslim families high-quality educational products centered around Ramadan.",
    },
    {
      year: "2020",
      label: "'20",
      title: "Ramadan Legacy Planner Launches",
      description: "The Ramadan Legacy Planner series launches — a powerful, practical planner with reflective exercises that quickly becomes a family favorite.",
    },
    {
      year: "2021",
      label: "'21",
      title: "The Ramadan Village Collection",
      description: "Sweet Moon introduces the beloved Ramadan Village Collection — handmade egg caps for Sahoor that bring magic and warmth to the family table.",
    },
    {
      year: "2022",
      label: "'22",
      title: "My Little Legacy Kids Journal",
      description: "Expanding to serve younger Muslims, Sweet Moon launches the My Little Legacy Ramadan Kids Journal & Activity Book.",
    },
    {
      year: "Today",
      label: "✦",
      title: "Growing with Families Nationwide",
      description: "Sweet Moon continues to grow, serving Muslim families across the United States with meaningful products that design lifetime Ramadan memories.",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-emerald-950 via-emerald-900 to-teal-800 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-10 right-10 size-80 rounded-full border-2 border-white" />
          <div className="absolute -bottom-10 -left-10 size-56 rounded-full border-2 border-white" />
        </div>
        <div className="absolute top-8 right-12 opacity-10 pointer-events-none">
          <Moon className="size-48 text-amber-200 fill-amber-100" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-2 rounded-full mb-8">
              <Moon className="size-4 text-amber-300 fill-amber-300" />
              <span className="text-sm text-amber-200 font-medium">Est. March 2019 · Omaha, Nebraska</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">Our Story</h1>
            <p className="text-xl text-emerald-100 leading-relaxed max-w-2xl">
              Sweet Moon was founded with a single purpose — to help Muslim families design lifetime Ramadan memories through beautiful, meaningful products.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-emerald-900 mb-6">
                Designing Lifetime Ramadan Memories
              </h2>
              <div className="space-y-5 text-lg text-gray-600 leading-relaxed">
                <p>
                  Sweet Moon was established in <strong className="text-emerald-800">March 2019</strong> in Omaha, Nebraska, with a clear and heartfelt mission: to help Muslim families create meaningful, lasting Ramadan experiences.
                </p>
                <p>
                  We design and market high-quality educational products, apparel, and decorative items — all centered around increasing youth engagement with the traditions and heritage of the Muslim world.
                </p>
                <p>
                  Our focus is simple: provide resources that enable families to{" "}
                  <strong className="text-emerald-700">engage</strong>,{" "}
                  <strong className="text-emerald-700">inspire</strong>, and{" "}
                  <strong className="text-emerald-700">educate</strong> their children about Islamic culture, art, history, and civilization.
                </p>
                <p>
                  From our beloved Ramadan Legacy Planner series to our handcrafted Ramadan Village egg caps — every Sweet Moon product is thoughtfully created to bring beauty, meaning, and learning into your family's Ramadan.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900"
                  alt="Ramadan family memories"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/30 to-transparent rounded-3xl" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-5 rounded-2xl shadow-xl border border-gray-100">
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-700 mb-1">2019</div>
                  <div className="text-sm text-gray-500 font-medium leading-tight">Founded in<br />Omaha, NE</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-4xl font-bold text-emerald-900 mb-4">Our Mission</h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
              Everything we do is in service of one goal: helping Muslim families thrive through meaningful engagement with Islamic heritage.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mission.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-7 rounded-2xl shadow-sm hover:shadow-lg transition-shadow border border-emerald-100"
              >
                <div className="bg-gradient-to-br from-emerald-600 to-teal-700 p-3 rounded-xl w-fit mb-4">
                  <item.icon className="size-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-emerald-900 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-4xl font-bold text-emerald-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-500">Growing together, one Ramadan at a time</p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-6 top-4 bottom-4 w-0.5 bg-emerald-100" />
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-16"
                >
                  <div className="absolute left-0 top-1 bg-emerald-700 text-white size-12 rounded-full flex items-center justify-center font-bold text-xs shadow-md">
                    {milestone.label}
                  </div>
                  <div className="bg-white border border-gray-100 hover:border-emerald-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
                    <div className="text-emerald-600 font-bold text-sm mb-1">{milestone.year}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                    <p className="text-gray-500 leading-relaxed text-sm">{milestone.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-br from-emerald-900 to-teal-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Moon className="size-14 mx-auto mb-6 text-amber-400 fill-amber-300" />
            <h2 className="text-3xl font-bold mb-3">Connect With Sweet Moon</h2>
            <p className="text-emerald-200 mb-2">📍 16360 R St. Omaha, NE 68135</p>
            <p className="text-emerald-200 mb-8">
              <a href="mailto:info@sweetmoon.us" className="underline hover:text-white transition-colors">
                info@sweetmoon.us
              </a>
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://sweetmoon.us"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-emerald-950 font-bold px-8 py-4 rounded-xl transition-all"
              >
                <ShoppingBag className="size-4" />
                Shop on sweetmoon.us
              </a>
              <a
                href="https://instagram.com/sweet_moon_llc/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-8 py-4 rounded-xl transition-all"
              >
                Follow on Instagram
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

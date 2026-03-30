import { motion } from "motion/react";
import { Mail, MapPin, Send, MessageCircle, Clock, Moon } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted:", formData);
    alert("Thank you for reaching out! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      detail: "info@sweetmoon.us",
      description: "We typically respond within 24 hours",
      href: "mailto:info@sweetmoon.us",
    },
    {
      icon: Moon,
      title: "Follow Us",
      detail: "@sweet_moon_llc",
      description: "Stay connected on Instagram & Facebook",
      href: "https://instagram.com/sweet_moon_llc/",
    },
    {
      icon: MapPin,
      title: "Our Location",
      detail: "Omaha, NE 68135",
      description: "16360 R St. Omaha, Nebraska",
      href: null,
    },
  ];

  const faqs = [
    {
      question: "Do you ship internationally?",
      answer: "Yes! We ship to most countries worldwide. Shipping costs and times vary by location."
    },
    {
      question: "Are your toys safe for young children?",
      answer: "Absolutely! All our toys are made with non-toxic materials and meet international safety standards. Each product has an age recommendation."
    },
    {
      question: "Can I customize a toy?",
      answer: "Yes! We offer custom orders for special occasions. Contact us to discuss your ideas."
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy on all products. Items must be unused and in original packaging."
    }
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-emerald-950 via-emerald-900 to-teal-800 text-white py-20 relative overflow-hidden">
        <div className="absolute top-6 right-10 opacity-10 pointer-events-none">
          <Moon className="size-44 text-amber-200 fill-amber-100" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-2 rounded-full mb-6">
              <MessageCircle className="size-4 text-amber-300" />
              <span className="text-sm text-amber-200 font-medium">Sweet Moon · Omaha, Nebraska</span>
            </div>
            <h1 className="text-5xl font-bold mb-4">Get in Touch</h1>
            <p className="text-xl text-emerald-100">
              We'd love to hear from you! Questions, feedback, wholesale inquiries — we're here.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-md text-center hover:shadow-xl transition-all border border-gray-100"
              >
                <div className="bg-gradient-to-br from-emerald-700 to-teal-700 p-4 rounded-xl w-fit mx-auto mb-4">
                  <info.icon className="size-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{info.title}</h3>
                {info.href ? (
                  <a href={info.href} target={info.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="text-emerald-600 font-semibold mb-2 block hover:text-emerald-700 transition-colors">
                    {info.detail}
                  </a>
                ) : (
                  <p className="text-emerald-600 font-semibold mb-2">{info.detail}</p>
                )}
                <p className="text-gray-500 text-sm">{info.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Image */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-emerald-900 mb-4">
                Send Us a Message
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Fill out the form below and we'll get back to you as soon as possible
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-emerald-500 focus:outline-none transition-colors"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-emerald-500 focus:outline-none transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-emerald-500 focus:outline-none transition-colors"
                  >
                    <option value="">Select a subject</option>
                    <option value="product">Product Inquiry</option>
                    <option value="custom">Custom Order</option>
                    <option value="wholesale">Wholesale Inquiry</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-emerald-500 focus:outline-none transition-colors resize-none"
                    placeholder="Tell us how we can help..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-4 px-8 rounded-lg hover:from-emerald-700 hover:to-teal-700 transition-all shadow-lg hover:shadow-xl font-semibold flex items-center justify-center gap-2"
                >
                  Send Message
                  <Send className="size-5" />
                </button>
              </form>
            </motion.div>

            {/* Info Cards */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Sweet Moon About Card */}
              <div className="bg-gradient-to-br from-emerald-900 to-teal-800 text-white p-8 rounded-2xl relative overflow-hidden">
                <div className="absolute top-4 right-4 opacity-10">
                  <Moon className="size-24 text-amber-200 fill-amber-100" />
                </div>
                <Moon className="size-10 text-amber-400 fill-amber-300 mb-4" />
                <h3 className="text-2xl font-bold mb-2">Sweet Moon</h3>
                <p className="text-emerald-200 text-sm leading-relaxed mb-4">
                  Designing Lifetime Ramadan Memories — a family-owned business based in Omaha, Nebraska, founded in March 2019.
                </p>
                <a
                  href="https://sweetmoon.us"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-emerald-950 font-bold px-6 py-3 rounded-xl text-sm transition-all"
                >
                  Visit sweetmoon.us
                </a>
              </div>

              {/* Response Info */}
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl border border-amber-100">
                <Clock className="size-8 text-amber-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Response Time</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  We aim to respond to all inquiries within <strong>24 hours</strong>. For faster support, reach out via email at{" "}
                  <a href="mailto:info@sweetmoon.us" className="text-emerald-600 font-semibold hover:underline">
                    info@sweetmoon.us
                  </a>
                </p>
              </div>

              {/* Social Links */}
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-2xl border border-emerald-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Follow Sweet Moon</h3>
                <p className="text-gray-500 text-sm mb-5">
                  Stay up to date with new products, Ramadan tips, and behind-the-scenes content.
                </p>
                <div className="flex gap-3">
                  <a
                    href="https://instagram.com/sweet_moon_llc/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-white border border-gray-200 text-gray-700 hover:border-emerald-400 hover:text-emerald-700 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all"
                  >
                    Instagram
                  </a>
                  <a
                    href="https://facebook.com/sweetmoonllc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-white border border-gray-200 text-gray-700 hover:border-emerald-400 hover:text-emerald-700 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all"
                  >
                    Facebook
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-emerald-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-md"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-600">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-gray-600 mb-4">
              Don't see your question answered?
            </p>
            <button className="text-emerald-600 hover:text-emerald-700 font-semibold text-lg">
              View All FAQs →
            </button>
          </motion.div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-emerald-900 mb-8">
              We're Here to Help
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Sweet Moon is a family-owned business and we take customer care personally.
              When you reach out, you're talking directly to the people behind every product.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-center">
              <div className="bg-emerald-50 px-8 py-6 rounded-xl">
                <div className="text-4xl font-bold text-emerald-600 mb-2">24h</div>
                <div className="text-gray-700">Average Response Time</div>
              </div>
              <div className="bg-teal-50 px-8 py-6 rounded-xl">
                <div className="text-4xl font-bold text-teal-600 mb-2">100+</div>
                <div className="text-gray-700">Happy Families Served</div>
              </div>
              <div className="bg-amber-50 px-8 py-6 rounded-xl">
                <div className="text-4xl font-bold text-amber-600 mb-2">4.9★</div>
                <div className="text-gray-700">Customer Satisfaction</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

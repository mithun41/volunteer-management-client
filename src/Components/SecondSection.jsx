import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Shamima Akter",
    role: "Volunteer, Tree Drive",
    quote:
      "Volunteering with this platform changed my life. It gave me purpose, friends, and a way to give back.",
    img: "https://i.pravatar.cc/150?img=32",
  },
  {
    name: "Tanvir Ahmed",
    role: "Flood Relief Member",
    quote:
      "I never imagined helping people could be this fulfilling. The team made everything easy and impactful.",
    img: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Ayesha Rahman",
    role: "Community Health Volunteer",
    quote:
      "Helping my community has been the most rewarding experience. I’ve learned so much and met amazing people.",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Rafiq Islam",
    role: "Disaster Response Team",
    quote:
      "Volunteering during the flood crisis showed me the power of teamwork and compassion. Proud to be part of this.",
    img: "https://randomuser.me/api/portraits/men/72.jpg",
  },
];

const SecondSection = () => {
  return (
    <section className="my-16 bg-gradient-to-br from-green-100 via-red-50 to-[#66AFF7] dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-12">
      <h2 className="text-3xl font-bold text-center mb-10 text-orange-500 dark:text-white">
        What Our <span className="text-[#66AFF7]">Volunteers</span> Say 💬
      </h2>
      <div className="w-11/12 mx-auto grid md:grid-cols-2 gap-8">
        {testimonials.map((t, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border-t-4 border-blue-400 dark:border-blue-600"
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src={t.img}
                alt={t.name}
                className="w-14 h-14 rounded-full border-2 border-blue-300"
              />
              <div>
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                  {t.name}
                </h4>
                <p className="text-sm text-gray-500 dark:text-gray-300">
                  {t.role}
                </p>
              </div>
            </div>
            <p className="text-gray-700 dark:text-gray-200 italic">
              “{t.quote}”
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SecondSection;

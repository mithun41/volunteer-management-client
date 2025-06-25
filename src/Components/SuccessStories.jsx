import { motion } from "framer-motion";

const SuccessStories = () => {
  return (
    <section className="my-12 w-11/12 mx-auto ">
      <h2 className="text-4xl font-bold mb-6 text-gray-800 dark:text-gray-100 text-center">
        <span className="text-green-600">Success</span>{" "}
        <span className="text-red-500">Stories</span>
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        <motion.div
          animate={{ y: [0, 30, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="bg-green-50 dark:bg-green-900 p-6 rounded-2xl shadow-md border-l-4 border-green-400 dark:border-green-600"
        >
          <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
            Tree Plantation Drive
          </h3>
          <p className="text-gray-700 dark:text-gray-300">
            A successful campaign with 100+ trees planted across schools.
          </p>
          <div className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            May 12, 2025
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [30, 0, 30] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="bg-green-50 dark:bg-green-900 p-6 rounded-2xl shadow-md border-l-4 border-green-400 dark:border-green-600"
        >
          <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
            Flood Relief in Sylhet
          </h3>
          <p className="text-gray-700 dark:text-gray-300">
            20 volunteers helped distribute food and medicine to 300 families.
          </p>
          <div className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            June 5, 2025
          </div>
        </motion.div>
      </div>
      <div className="flex justify-center mt-10 ">
        <motion.div
          animate={{ x: [50, 0, 50] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="bg-green-50 dark:bg-green-900 p-6 rounded-2xl shadow-md border-l-4 border-green-400 dark:border-green-600 "
        >
          <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
            Winter Blanket Distribution
          </h3>
          <p className="text-gray-700 dark:text-gray-300">
            Over 500 blankets were distributed among the homeless during a cold
            wave in northern Bangladesh.
          </p>
          <div className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            January 3, 2025
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SuccessStories;

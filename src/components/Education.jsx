import { motion } from "framer-motion";
const Education = () => {
  const variantsLeft = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 },
  };

  const variantsRight = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <div
      id="education"
      className="flex min-h-screen items-center justify-center w-full flex-col gap-16 p-4 md:px-14 md:py-24"
    >
      <motion.h1
        variants={variantsLeft}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.25 }}
        className="text-4xl font-light text-white md:text-5xl"
      >
        🎓 Education & 💼 Work Experience Timeline
      </motion.h1>

      <div>
        <div class="flex flex-col grid-cols-9 p-2 mx-auto md:grid">
          <div class="flex md:contents flex-row-reverse">
            <motion.div
              variants={variantsLeft}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.25 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.85 }}
              class="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto"
            >
              <h3 class="text-lg font-bold lg:text-2xl">
                Bachelor of Science in Applied Artificial Intelligence
              </h3>
              <p class="mt-2 leading-6">Singapore Institute of Technology</p>
              <p class="mt-2 leading-6 font-bold">📅 Sep 2024 - Present</p>
              <p class="mt-2 leading-6 font-bold">📋 Key Coursework</p>
              <p>
                Machine Learning, Computer Vision and Deep Learning, Data
                Structures and Algorithms, Data Science, Software
                Engineering,Database Systems
              </p>
              <p class="mt-2 leading-6 font-bold">🛠️ Technical Skills</p>
              <p>Python, C, Linux,..(TBA)</p>
            </motion.div>
            <div class="relative col-start-5 col-end-6 mr-7 md:mx-auto">
              <div class="flex items-center justify-center w-6 h-full">
                <div class="w-1 h-full bg-indigo-300 rounded-t-full bg-gradient-to-b from-indigo-400 to-indigo-300"></div>
              </div>
              <div class="absolute w-6 h-6 -mt-3 bg-white border-4 border-indigo-400 rounded-full top-1/2"></div>
            </div>
          </div>

          <div class="flex md:contents">
            <div class="relative col-start-5 col-end-6 mr-7 md:mx-auto">
              <div class="flex items-center justify-center w-6 h-full">
                <div class="w-1 h-full bg-indigo-300"></div>
              </div>
              <div class="absolute w-6 h-6 -mt-3 bg-white border-4 border-indigo-400 rounded-full top-1/2"></div>
            </div>
            <motion.div
              variants={variantsRight}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.25 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.85 }}
              class="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-6 col-end-10 mr-auto"
            >
              <h3 class="text-lg font-bold lg:text-2xl">
                Data Analytics Intern
              </h3>
              <p class="mt-2 leading-6">Institute of Banking and Finance</p>
              <p class="mt-2 leading-6 font-bold">📅 Sep 2021 - Feb 2022</p>
              <p class="mt-2 leading-6 font-bold">🎯 Job Scope</p>
              <ul class="list-disc pl-5 mt-2 leading-6">
                <li>
                  Streamlined data workflows through cleaning and
                  transformation.
                </li>
                <li>
                  Created interactive dashboards using Tableau for actionable
                  insights.
                </li>
                <li>
                  Automated data cleaning with Python, boosting accuracy and
                  efficiency.
                </li>
              </ul>
              <p class="mt-2 leading-6 font-bold">🛠️ Technical Skills</p>
              <ul class="list-disc pl-5 mt-2 leading-6">
                <li>Data Analysis: Python (Pandas, NumPy)</li>
                <li>Data Visualization: Tableau, Tableau Prep</li>
                <li>Automation: Python</li>
                <li>Data Cleaning and Transformation</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;

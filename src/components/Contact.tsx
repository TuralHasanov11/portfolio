import { motion } from "framer-motion";

import { styles } from "../assets/styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

function Contact() {
  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.65] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>
        <div className="mt-12 flex flex-col gap-8">
          <div className="flex flex-row gap-3">
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-medium"
            >
              <i className="fa-solid fa-envelope"></i> test@test.com
            </a>
          </div>
          <div className="flex flex-col gap-3">
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-medium"
            >
              <i className="fa-brands fa-linkedin"></i> LinkedIn address
            </a>
          </div>
          <div className="flex flex-col gap-3">
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-medium"
            >
              <i className="fa-brands fa-github"></i> GitHub profile
            </a>
          </div>
          <div className="flex flex-col gap-3">
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-medium"
            >
              <i className="fa-brands fa-youtube"></i> YouTube channel
            </a>
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
}

export default SectionWrapper(Contact, "contact");

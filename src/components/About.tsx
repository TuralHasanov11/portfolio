import React from "react";
import {Tilt} from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../assets/styles";
import { services } from "../data";
import { fadeIn } from "../utils/motion.js";
import { Service } from "../models/global.model.js";
import {SectionWrapper} from "../hoc"

function ServiceCard({ index, service }: { index: number; service: Service }) {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary rounded-[10px] py-2 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={service.icon} alt={service.title} className="w-16 h-16 object-contain"/>
          <h3 className="text-white text-[20px] font-bold text-center">{service.title}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
}

function About() {
  return (
    <div>
      <motion.div>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, dolor.
        Officia saepe natus illum, laborum libero eum, eligendi rem est facilis
        voluptatibus ab amet? Dignissimos, aspernatur? Cumque voluptate mollitia
        dicta! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non,
        dolor. Officia saepe natus illum, laborum libero eum, eligendi rem est
        facilis voluptatibus ab amet? Dignissimos, aspernatur? Cumque voluptate
        mollitia dicta! Lorem ipsum, dolor sit amet consectetur adipisicing
        elit. Non, dolor. Officia saepe natus illum, laborum libero eum,
        eligendi rem est facilis voluptatibus ab amet? Dignissimos, aspernatur?
        Cumque voluptate mollitia dicta!
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10 justify-center">
        {services?.map((service, index) => (
          <ServiceCard key={index} index={index} service={service} />
        ))}
      </div>
    </div>
  );
}

export default SectionWrapper(About, "about")

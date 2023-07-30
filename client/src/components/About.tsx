import { useEffect, useState } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../assets/styles";
import { fadeIn } from "../utils/motion.js";
import { Service } from "../models/global.model.js";
import { SectionWrapper } from "../hoc";
import backendClient from "../clients.js";
import { imageUrl } from "../utils/image_url.js";

function ServiceCard({ index, service }: { index: number; service: Service }) {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          //@ts-ignore
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary rounded-[10px] py-2 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img
            src={imageUrl(service.icon).url()}
            alt={service.title}
            className="w-16 h-16 object-contain"
          />
          <h3 className="text-white text-[20px] font-bold text-center">
            {service.title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
}

function About() {
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    backendClient
      .fetch(
        `*[_type == "services"]{
            title,
            icon{
              asset->{
                _id,
                url
              }
            } 
        }`
      )
      .then((data) => setServices(data))
      .catch(console.error);
  }, []);

  return (
    <div>
      <motion.div>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] leading-[30px]"
      >
        I am Tural Hasanov, a passionate and dedicated full stack developer with
        a flair for crafting innovative digital solutions. With a profound love
        for coding and an insatiable curiosity for technology, I find my
        greatest joy in transforming ideas into functional and elegant
        applications. I keep myself up-to-date with the latest trends and
        emerging technologies in both front-end and back-end development. From
        mastering the latest JavaScript frameworks like React and Vue.js to
        building robust server-side applications with Node.js and Django, I'm
        always eager to push the boundaries of what I can achieve through code.
        I am always open to exciting new opportunities and collaborations. If
        you have an interesting project or just want to discuss all things tech,
        feel free to get in touch! You can find my contact information on the
        contact page of this portfolio. You'll find a curated selection of
        projects that highlight my technical expertise, problem-solving
        capabilities, and creative thinking. Each project represents a unique
        challenge I embraced, and a valuable lesson I learned along the way. I
        encourage you to explore them and experience the diversity of my work.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10 justify-center">
        {services?.map((service, index) => (
          <ServiceCard key={index} index={index} service={service} />
        ))}
      </div>
    </div>
  );
}

export default SectionWrapper(About, "about");

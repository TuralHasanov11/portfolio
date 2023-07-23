import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { fadeIn } from "../utils/motion.js";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Technology } from "../models/global.model.js";
import backendClient from "../clients.js";

function Technologies() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);

  useEffect(() => {
    backendClient
      .fetch(
        `*[_type == "technologies"]{
            name,
            icon{
              asset->{
                _id,
                url
              }
            } 
        }`
      )
      .then((data) => setTechnologies(data))
      .catch(console.error);
  }, []);

  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies?.map((technology, index) => (
        <div className="w-28 h-28 mb-6" key={index}>
          <motion.div variants={fadeIn("", "", 0.1 * index, 0.2)}>
            <h1 className="text-center">{technology.name}</h1>
            <BallCanvas icon={technology.icon} />
          </motion.div>
        </div>
      ))}
    </div>
  );
}

export default SectionWrapper(Technologies, "technologies");

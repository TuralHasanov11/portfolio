import { BallCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { technologies } from "../data"
import { fadeIn } from "../utils/motion.js";
import { motion } from "framer-motion";


function Technologies() {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies?.map((technology, index) => (
        <div className="w-28 h-28 mb-6" key={index}>
          <h1 className="text-center">{technology.name}</h1>
          <motion.div  variants={fadeIn("", "", 0.1 * index, 0.2)}>
            <BallCanvas icon={technology.icon} />
          </motion.div>
        </div>
      ))}
    </div>
  )
}

export default SectionWrapper(Technologies, "technologies")

import {useState, useEffect} from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";

import { styles } from "../assets/styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { Experience } from "../models/global.model";
import backendClient from "../clients";
import { imageUrl } from "../utils/image_url";
import dateMonthYearFormatter from "../utils/date_formatter";
import {toHTML} from '@portabletext/to-html'


function ExperienceCard({ experience }: { experience: Experience }) {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#1d1836", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      date={`${dateMonthYearFormatter(experience.from_date)} - ${dateMonthYearFormatter(experience.to_date)}`}
      iconStyle={{ background: "#E6DEDD" }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={imageUrl(experience.icon).url()}
            alt={experience.company}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p className="text-secondary text-[16px] font-semibold m-0">
          {experience.company}
        </p>
      </div>
      <p dangerouslySetInnerHTML={{__html:toHTML(experience.description)}} className="experience-description mt-5 ml-5 space-y-2 text-white-100 text-[14px] pl-2 tracking-wider" />
    </VerticalTimelineElement>
  );
}

function Experiences() {

  const [experiences, setExperiences] = useState<Experience[]>([]);

  useEffect(() => {
    backendClient
      .fetch(
        `*[_type == "experiences"] | order(from_date desc){
            title,
            company,
            from_date,
            to_date,
            description,
            icon{
              asset->{
                _id,
                url
              }
            } 
        }`
      )
      .then((data) => setExperiences(data))
      .catch(console.error);
  }, []);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My experience</p>
        <h2 className={styles.sectionHeadText}>Education & Work Experience</h2>
      </motion.div>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences?.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
}

export default SectionWrapper(Experiences, "experiences");

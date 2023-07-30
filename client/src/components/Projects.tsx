import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../assets/styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { Project } from "../models/global.model";
import { useState, useEffect } from "react";
import backendClient from "../clients";
import { imageUrl } from "../utils/image_url";
import getColorClassByNumber from "../utils/colors";

function ProjectCard({ project, index }: { project: Project; index: number }) {

  function projectModeColor(project: Project): string{
    return project.in_production?"green":"blue"
  }

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={imageUrl(project.image).url()}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex flex-row justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(project.source_code_link, "_blank")}
              className="w-16 h-16 flex justify-center items-center flex-col cursor-pointer gap-2"
            >
              <span
                className={`bg-${projectModeColor(project)}-100 text-${projectModeColor(project)}-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-${projectModeColor(project)}-900 dark:text-${projectModeColor(project)}-300`}
              >
                {project.in_production?"Production":"Demo"}
              </span>
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain black-gradient rounded-full"
              />
            </div>
          </div>
        </div>

        <div
          className="mt-5 cursor-pointer"
          onClick={() => window.open(project.source_code_link, "_blank")}
        >
          <h3 className="text-white font-bold text-[24px]">{project.name}</h3>
          <p className="mt-2 text-secondary text-[14px]">
            {project.description}
          </p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <p
              key={`${project.name}-tag-${index}`}
              className={`text-[14px] ${getColorClassByNumber(index)}`}
            >
              #{tag}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
}

function Projects() {

  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    backendClient
      .fetch(
        `*[_type == "projects"]{
            name,
            description,
            tags,
            source_code_link,
            in_production,
            image{
              asset->{
                _id,
                url
              }
            } 
        }`
      )
      .then((data) => setProjects(data))
      .catch(console.error);
  }, []);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My Projects</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={index} index={index} project={project} />
        ))}
      </div>
    </>
  );
}

export default SectionWrapper(Projects, "projects");

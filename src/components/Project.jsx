import {PROJECTS} from "../constants/index.js";
import {motion} from "motion/react";

const Project = () => {

    return<div className="border-b border-neutral-900 pb-4">
        <motion.h2 whileInView={{opacity:1, y:0}} initial={{opacity:0, y:-100}} transition={{duration:1.5}} className="my-20 text-center text-4xl ">Projects </motion.h2>
        <div>
            {PROJECTS.map((projects, index) => (
                <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                    <motion.div  whileInView={{opacity:1, x:0}} initial={{x:-100,opacity:0}}  transition={{duration:1.5}} className="w-full lg:w-1/4">
                    <img src={projects.image} width={150} height={150} alt={projects.description} className="mb-6 rounded"/>
                    </motion.div>
                    <motion.div whileInView={{opacity:1, x:0}} initial={{x:100,opacity:0}}  transition={{duration:1.5}} className='w-full max-w-xl lg:w-3/4'>
                        <h6 className="mb-2 font-semibold">{projects.title}</h6>
                        <p className="mb-4 text-neutral-400">{projects.description}</p>
                        {projects.technologies.map((tech , index) =>(
                            <span className={"mr-2 rounded bg-neutral-900 text-purple-800 py-1 px-2"} key={index}>{tech}</span>
                        ))}
                    </motion.div>
                </div>
            ))}
        </div>
    </div>
}

export default Project;

import aboutImg from '../assets/cemKarakoseAbout.jpeg'
import {ABOUT_TEXT} from "../constants/index.js";
import { motion } from "motion/react"
const About = () => {

    return(
        <div className="border-b border-neutral-900 pb-4">
            <h1 className="my-20 text-center text-4xl">
                About
                <span className="text-purple-500"> Me</span>
            </h1>
            <div className="flex flex-wrap">
                <motion.div
                    whileInView={{opacity:1, x: 0}}
                    initial={{opacity:0, x : -100}}
                    transition={{duration: 0.5 , delay:0.3}}
                    className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex items-center justify-center">
                        <img className="rounded-3xl" src={aboutImg}  alt={"aboutImg"}/>
                    </div>

                </motion.div>
                <motion.div
                    whileInView={{opacity:1, x: 0}}
                    initial={{opacity:0, x : 100}}
                    transition={{duration: 0.5 , delay:0.3}}
                    className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:justify-center">
                        <p className="my-2 max-w-xl py-6">{ABOUT_TEXT}</p>
                    </div>
                </motion.div>
            </div>

        </div>
    )
}

export default About
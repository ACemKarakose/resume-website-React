import {RiReactjsLine} from "react-icons/ri";
import { FaNodeJs,FaAws } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaFlutter } from "react-icons/fa6";
import { BiLogoTypescript,BiLogoJavascript } from "react-icons/bi";
import {motion} from "motion/react";


const iconAnimation = (duration) => ({
    initial : {y: -10},
    animate : {
        y : [10,-10],
        transition : {
            duration : duration,
            ease : 'linear',
            repeat : Infinity,
            repeatType : 'reverse',

        }
    }
})


const Technologies = () => {

    return(
        <div className="border-b border-neutral-900 pb-24">
            <motion.h1 whileInView={{opacity:1, y:0}} initial={{opacity:0,y:-100}} transition={{duration:1.5}} className="my-20 text-center text-4xl ">Technologies</motion.h1>
            <motion.div whileInView={{opacity: 1, x:0}} initial={{opacity:0, x:-100}} transition={{duration: 1.5}} className="flex flex-wrap items-center justify-center gap-4">
                <motion.div initial={'initial'} animate={"animate"} variants={iconAnimation(2)} className="rounded-2xl border-4 border-purple-900 p-4 hover:border-neutral-900">
                    <RiReactjsLine className="text-8xl text-cyan-400"/>
                </motion.div>
                <motion.div initial={'initial'} animate={"animate"} variants={iconAnimation(4)} className="rounded-2xl border-4 border-purple-900 p-4 hover:border-neutral-900">
                    <FaNodeJs className="text-8xl text-green-600"/>
                </motion.div>
                <motion.div initial={'initial'} animate={"animate"} variants={iconAnimation(2)} className="rounded-2xl border-4 border-purple-900 p-4 hover:border-neutral-900">
                    <SiMongodb className="text-8xl text-green-600"/>
                </motion.div>
                <motion.div  initial={'initial'} animate={"animate"} variants={iconAnimation(4)} className="rounded-2xl border-4 border-purple-900 p-4 hover:border-neutral-900">
                    <BiLogoJavascript className="text-8xl text-yellow-300"/>
                </motion.div>
                <motion.div initial={'initial'} animate={"animate"} variants={iconAnimation(2)} className="rounded-2xl border-4 border-purple-900 p-4 hover:border-neutral-900">
                    <BiLogoTypescript className="text-8xl text-blue-400"/>
                </motion.div>
                <motion.div initial={'initial'} animate={"animate"} variants={iconAnimation(4)} className="rounded-2xl border-4 border-purple-900 p-4 hover:border-neutral-900">
                    <FaFlutter className="text-8xl text-blue-500"/>
                </motion.div>
                <motion.div initial={'initial'} animate={"animate"} variants={iconAnimation(2)} className="rounded-2xl border-4 border-purple-900 p-4 hover:border-neutral-900">
                    <FaAws className="text-8xl text-gray-600"/>
                </motion.div>
            </motion.div>
        </div>
    )
}


export default Technologies;

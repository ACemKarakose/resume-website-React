import resume from '../assets/CemKarakose_CV copy.pdf'
import {CONTACT} from "../constants/index.js";
import {motion} from "motion/react";
const Contact = () => {

    return(
        <motion.div whileInView={{opacity:1 , x:0}} initial={{opacity:0, x:100}} transition={{duration:1.5}} className={"border-b border-neutral-900 pb-20"}>
            <h2 className={"my-10 text-center text-4xl"}>Get in Touch </h2>
            <div className={"text-center tracking-tighter"}>
                <p className={"my-4"}>{CONTACT.name}</p>
                <a href={`tel:${CONTACT.phoneNo}`}>
                    <p className={"my-4"}>{CONTACT.phoneNo}</p>
                </a>
                <a className={"border-b"} href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>


            </div>

        </motion.div>
    )
}

export default Contact;


/*
*
*   <button>
                <a href={resume} download={"resume"}>Download my cv</a>
            </button>
*
* */

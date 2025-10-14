import './main.css';
import Intro from './Intro/Intro';
import Skills from './Skills/Skills';
import Project from './Projects/Projects.jsx';
import { motion as MotionTag } from "framer-motion";
// import { motion } from 'framer-motion';

function Main() {
    return (
        <span className="gap-0" id="container-main">
            <div><Intro /></div>

            {/* Animate Skills on scroll */}
            <MotionTag.div
                id="div2"
                initial={{ opacity: 0, y: 0 }} // start hidden & below
                whileInView={{ opacity: 1, y: 0 }} // animate to visible
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true, amount: 0 }}
            // once:true = animate only once
            // amount:0.3 = triggers when 30% of div is visible
            >
                <Skills />
            </MotionTag.div>
            <MotionTag.div id="div3"
                initial={{ opacity: 1, y: 0 }} // start hidden & below
                whileInView={{ opacity: 1, y: 0 }} // animate to visible
                transition={{ duration: 0, ease: "easeOut" }}
                viewport={{ once: true, amount: 0 }}>
                <Project />
            </MotionTag.div>

        </span>
    );
}

export default Main;

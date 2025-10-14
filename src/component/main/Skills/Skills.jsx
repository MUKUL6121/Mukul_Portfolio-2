import './Skills.css';
import { useEffect, useState } from 'react';
import FrontendCards from './frontend-cards.jsx';
import BackendCards from './backend-cards.jsx';
import ToolCards from './Tools-Cards.jsx';
import { motion as MotionTag } from "framer-motion";
import { useLocation } from 'react-router-dom';

function Skills() {
    const location = useLocation();
    const [style, setStyle] = useState({});

    useEffect(() => {
        console.log(location.pathname);
        if (location.pathname === '/') {
            setStyle({ position: "relative" })
            console.log("skills is relative");
        }
        else {
            setStyle({ position: 'absolute' })
            console.log("skills is absoulte");
        }

    }, [location.pathname]); // ✅ Correct dependency

    return (
        <MotionTag.div id="skills" style={style}>
            <div id="skills-1">
                <h1 style={{ textDecoration: "underline" }}>Tech Stack</h1>
            </div>

            <div id="skills-2" className='container m-4 gap-5'>
                <div className='skills-box'>
                    <h3>Front-end</h3>
                    <MotionTag.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 4, delay: 0.5 }}
                        viewport={{ once: true, amount: 0.4 }}
                    >
                        <FrontendCards />
                    </MotionTag.div>
                </div>

                <div className='skills-box'>
                    <h3>Back-end</h3>
                    <MotionTag.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 4, delay: 0.8 }}
                        viewport={{ once: true, amount: 0.4 }}
                    >
                        <BackendCards />
                    </MotionTag.div>
                </div>

                <div className='skills-box'>
                    <h3>Tools & Others Tech</h3>
                    <MotionTag.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 3, delay: 0 }}
                        viewport={{ once: true, amount: 0.1 }}
                    >
                        <ToolCards />
                    </MotionTag.div>
                </div>
            </div>
        </MotionTag.div>
    )
};

export default Skills;

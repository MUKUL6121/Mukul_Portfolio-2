import './Projects.css';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import img from '../../../assets/projects/alarm.png';
import news_img from '../../../assets/projects/news.png';
import cart_img from '../../../assets/projects/cart.png';
import sps_img from '../../../assets/projects/sps.png';
import cv from '../../../assets/projects/cv.png';

function Projects() {
    const data = [
        {
            img: img,
            alt: "alarm app",
            title: "Stop-Watch",
            tech: ["HTML", "JavaScript"],
            link: "https://stopwatch-rfnh.onrender.com"
        },
        {
            img: sps_img,
            alt: "sps game",
            title: "Stone,Paper,Scissor",
            tech: ["HTML", "JavaScript"],
            link: "https://stone-paper-scissor-4q66.onrender.com"
        },
        {
            img: news_img,
            alt: "news app",
            title: "Today's News",
            tech: ["React"],
            link: "https://news-app-j63z.onrender.com"
        },
        {
            img: cart_img,
            alt: "e-mart",
            title: "E-Mart",
            tech: ["PHP", "MySQL"],
            link: "https://e-mart.onrender.com"
        },
        {
            img: cv,
            alt: "Portfolio",
            title: "Portfolio",
            tech: ["MERN"],
            link: "already_here"
        }
    ];
    const location = useLocation();
    const [pStyle, setpStyle] = useState({});

    useEffect(() => {
        console.log(location.pathname);
        if (location.pathname === '/') {
            setpStyle({ position: "relative" })
            console.log("skills is relative");
        }
        else {
            setpStyle({ position: 'absolute' })
            console.log("skills is absoulte");
        }

    }, [location.pathname]);

    return (
        <div id="Project-root" style={pStyle}>
            <div id='circle-holder'>
                <div id="circle-holder-1">
                    <div className="rotating-circle-1"></div>
                    <div className="rotating-circle-2"></div>
                    <div className="rotating-circle-3"></div>
                </div>
                <div id="circle-holder-2"><h2 className="projects-heading">Projects</h2></div>
            </div>
            <div className="project-card-holder">
                {data.map((a, index) => (
                    <div className="project-card" key={index}>
                        <img src={a.img} alt={a.alt} />
                        <p>{a.title}</p>
                        <p style={{ fontStyle: "italic", fontWeight: 400, fontSize: "12px" }}>{a.tech.join(" | ")}</p>
                        <div className='btn-holder'>
                            <a
                                href={a.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-btn"
                            >
                                View
                            </a>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-btn"
                                disabled
                            >
                                code
                            </a>
                        </div>
                    </div>
                ))}
            </div>
            <div>
                <h5 style={{ color: 'blue' }}>No. of visitors on out site:</h5>
                <a href="https://www.hitwebcounter.com/" target="_blank">
                    <img src="https://hitwebcounter.com/counter/counter.php?page=21437980&style=0001&nbdigits=5&type=page&initCount=0" title="Website" alt="Website" border="0" />
                </a>
            </div>
        </div>
    );
}

export default Projects;

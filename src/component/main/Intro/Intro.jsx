import "./Intro.css";
import bgVideo from "../../../assets/bg.mp4"; // adjust path if needed

function Background() {
    return (
        <div className="" id="A-container">
            {/* Background video */}
            <video autoPlay loop muted id="bg-video">
                <source src={bgVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Dark overlay */}
            <div id="overlay"></div>

            {/* Neon Text Content */}
            <div className="content">
                <p className="tag mb-0" >{'<h1>'}</p>
                <p className="neon-text ms-3">Mukul Jangra</p>
                <p className="tag mt-0" >{'</h1>'}</p>
                <h1 className=" typing" style={{ color: "white", fontStyle: "Arial" }}> I'm Mern Stack Developer.</h1>
            </div>
        </div>
    );
}

export default Background;

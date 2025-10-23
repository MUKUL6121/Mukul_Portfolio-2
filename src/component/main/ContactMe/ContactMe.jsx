import './ContactMe.css';
import { useEffect, useState } from 'react';
import { motion as MotionTag } from "framer-motion";
import { useLocation } from 'react-router-dom';
import axios from 'axios';

function ContactMe() {
    const [name_text, setname] = useState("");
    const [mail, setmail] = useState("");
    const [feedbacktext, setfeedback] = useState("");
    const [confirm, setconfirm] = useState("");
    async function submit_handle(e) {
        e.preventDefault();
        const url = "https://mukul-portfolio-backend.onrender.com/post";
        const name = name_text;
        const email = mail;
        const feedback = feedbacktext;
        const data = { name, email, feedback };

        await axios.post(url, data);
        await setconfirm("please wait ...");
        await setTimeout(async () => {
            await done();
        }, 3000);
        // await setTimeout(() => {
        //     setconfirm("");
        // }, 5000);

    };
    // async function submit_handle(e) {
    //     e.preventDefault();
    //     // const url = "https://portfolio-backend-v7nt.onrender.com/post";//old
    //     const url = "https://mukul-portfolio-backend.onrender.com/post";//new
    //     const name = name_text;
    //     const email = mail;
    //     const feedback = feedbacktext;
    //     const data = { name, email, feedback };

    //     await axios.post(url, data);
    //     done();
    // };
    async function done() {
        await setmail("");
        await setfeedback("");
        await setconfirm("Feedback sent successfully!");
        await setTimeout(() => {
            setconfirm("");
        }, 5000);
    };

    const location = useLocation();
    const [Astyle, setStyle] = useState({});

    useEffect(() => {
        console.log(location.pathname);
        if (location.pathname === '/') {
            setStyle({ position: "relative" });
            console.log("skills is relative");
        }
        else {
            setStyle({ position: 'absolute' });
            console.log("skills is absoulte");
        }

    }, [location.pathname]);
    return (
        <MotionTag.div id="contact-root" style={Astyle}>
            {confirm}
            <div id="contact-container">
                <h2>Contact Form</h2>
                <form className='container' onSubmit={submit_handle} style={{ width: "400px", border: "0px solid black" }}>
                    <div>
                        <label htmlFor="" className='w-100'>Name :</label>
                        <input type="text" className='w-100' value={name_text}
                            onChange={(e) => setname(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="" className='w-50'>E-mail :</label>
                        <input type="mail" className='w-100' value={mail}
                            onChange={(e) => setmail(e.target.value)} required/>
                    </div>
                    <div>
                        <label htmlFor="" className='w-50'>Comment :</label>
                        <textarea type="text" className='w-100' value={feedbacktext}
                            onChange={(e) => setfeedback(e.target.value)} />
                    </div>
                    {/* btn */}
                    <div className='mt-2'><button>Send</button></div>
                </form>
            </div>
        </MotionTag.div>
    )
}

export default ContactMe;

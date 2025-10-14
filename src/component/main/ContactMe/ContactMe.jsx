import './ContactMe.css';
import { useEffect, useState } from 'react';
import { motion as MotionTag } from "framer-motion";
import { useLocation } from 'react-router-dom';

function ContactMe() {
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
            <div id="contact-container">
                <h2>Contact Form</h2>
                <form className='container' onSubmit={{}} style={{ width: "400px", border: "0px solid black" }}>
                    <div>
                        <label htmlFor="" className='w-100'>Name :</label>
                        <input type="text" className='w-100' />
                    </div>
                    <div>
                        <label htmlFor="" className='w-50'>E-mail :</label>
                        <input type="text" className='w-100' />
                    </div>
                    <div>
                        <label htmlFor="" className='w-50'>Comment :</label>
                        <textarea type="text" className='w-100' />
                    </div>
                    {/* btn */}
                    <div className='mt-2'><button>Send</button></div>
                </form>
            </div>
        </MotionTag.div>
    )
}

export default ContactMe;
import './HomePage.css'
import { Link } from "react-router-dom";
import { useState } from "react";
import { TypeAnimation } from 'react-type-animation';

const HomePage = ()=>{
    const [typingStatus, setTypingStatus] = useState("human1");
    return (
        <div className="HomePage">
            <img src="/orbital.png" alt="" className="orbital" />
            <div className="left">
                <h1>ECHO AI</h1>
                <h2>Amplify Your Ideas, Accelerate Your Work</h2>
                <h3>
                 ECHO AI is your smart and easy-to-use helper. It has a beautiful design that’s easy on the eyes, 
                 responds super fast, and lets you add images to your chats. Whether you’re brainstorming ideas,
                 working on projects, or just need quick answers. With ECHO AI, your ideas come to life effortlessly.
                </h3>
                <Link to="/dashboard">Get Started</Link>
            </div>
            <div className="right">
                <div className="imgContainer">
                <div className="bgContainer">
                    <div className="bg"></div>
                </div>
                <img src="/bot.png" alt="" className="bot" />
                <div className="chat">
                    <img
                    src={
                        typingStatus === "human1"
                        ? "/human1.jpeg"
                        : typingStatus === "human2"
                        ? "/human2.jpeg"
                        : "bot.png"
                    }
                    alt=""
                    />
                    <TypeAnimation
                    sequence={[
                        // Same substring at the start will only be typed out once, initially
                        "Human:We produce food for Mice",
                        2000,
                        () => {
                        setTypingStatus("bot");
                        },
                        "Bot:We produce food for Hamsters",
                        2000,
                        () => {
                        setTypingStatus("human2");
                        },
                        "Human2:We produce food for Guinea Pigs",
                        2000,
                        () => {
                        setTypingStatus("bot");
                        },
                        "Bot:We produce food for Chinchillas",
                        2000,
                        () => {
                        setTypingStatus("human1");
                        },
                    ]}
                    wrapper="span"
                    repeat={Infinity}
                    cursor={true}
                    omitDeletionAnimation={true}
                    />
                </div>
                </div>
            </div>
            <div className="terms">
                <img src="/logo.png" alt="" />
                <div className="links">
                <Link to="/">Terms of Service</Link>
                <span>|</span>
                <Link to="/">Privacy Policy</Link>
                </div>
            </div>
    </div>
    )
}

export default HomePage
import {FC} from 'react';
import classes from "./About.module.css";
import {MdOutlineEmail, MdOutlinePhoneIphone, MdLocationPin} from "react-icons/md";
import {FaLinkedinIn} from "react-icons/fa";
import ProgressItem from "./ProgressItem";
import Image from "next/image";

const About: FC = () => {
    return <div className={classes.about} id="about-me">
        <h1>Mawer Huang</h1>
        <div>

            <div className={classes.imgRegion}>
                <Image src="/images/isme.jpg" alt="" width={315} height={420}/>
            </div>

            <div className={classes.profile}>
                <h5>Profile</h5>
                <ul>
                    <li><MdOutlineEmail/> <span>huang@mawer.cc</span></li>
                    <li><MdOutlinePhoneIphone/> <span>+886-9-33843711</span></li>
                    <li><MdLocationPin/> <span>New Taipei, Taiwan</span></li>
                    <li><FaLinkedinIn/> <span>
                        <a href="https://www.linkedin.com/in/mawer-huang-921a8a131/">LinkedIn</a>
                    </span></li>
                </ul>
            </div>
            <div className={classes.skills}>
                <h5>My Skills</h5>
                <ProgressItem title="HTML / TypeScript / SASS" width="90%"/>
                <ProgressItem title="React / NextJS / React Native" width="80%"/>
                <ProgressItem title="Node.js / Unit Test" width="70%"/>
                <ProgressItem title="Photoshop / Premiere / Illustrator" width="90%"/>
            </div>
        </div>

    </div>
};

export default About;
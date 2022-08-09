import {FC} from 'react';
import classes from "./Interests.module.css";
import {GiMagickTrick, GiOldMicrophone, GiPhotoCamera, GiCoffeeBeans} from "react-icons/gi";

const Interests:FC = () =>{

    const interestsData = [
        {title:"Coffee",content:["Have a cup every morning.", "Indispensable sense of ceremony."],icon:<GiCoffeeBeans/>},
        {title:"Dubbing",content:["Has more than five voices.", "Change at any time with your mood."],icon:<GiOldMicrophone/>},
        {title:"Magic",content:["Fifteen years of research on magic.", "Every now and then some ideas come up."],icon:<GiMagickTrick/>},
        {title:"photography",content:["Record every moment of your life.", "Share my life through video."],icon:<GiPhotoCamera/>},
    ]

    return <div className={classes.interests} id="interests">
        <h1>Interests</h1>
        <div>
            {interestsData.map(item=>{
                return <div className={classes.interestItem} key={item.title}>
                    {item.icon}
                    <h5>{item.title}</h5>
                    <p>{item.content[0]}<br/>{item.content[1]}</p>
                </div>
            })}

        </div>

    </div>
};

export default Interests;
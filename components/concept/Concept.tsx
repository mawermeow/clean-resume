import {FC} from 'react';
import classes from "./Concept.module.css";
import {GiBookCover, GiHollowCat, GiMeditation} from "react-icons/gi";
import ConceptCircle from "./ConceptCircle";

const targetData = [
    {title: "Progressive", percent: "0.98", icon: <GiBookCover/>},
    {title: "Hygge", percent: "0.9", icon: <GiHollowCat/>},
    {title: "Minimalist", percent: "0.95", icon: <GiMeditation/>},
];

const Concept: FC = () => {

    return <div className={classes.target} id="my-concept">
        <h1>My Concept</h1>

        <div>
            {targetData.map(item => {
                return <ConceptCircle title={item.title} percent={item.percent} key={item.title}>
                    {item.icon}
                </ConceptCircle>
            })}
        </div>

    </div>
};

export default Concept;
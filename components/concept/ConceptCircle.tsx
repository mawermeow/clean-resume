import {FC, ReactNode} from 'react';
import classes from "./ConceptCircle.module.css";
import {motion} from "framer-motion";

type TargetCircleProps = { children?: ReactNode, percent: string ,title:string}


const ConceptCircle: FC<TargetCircleProps> = ({children, percent,title}) => {
    return <div className={classes.outSideTargetCircle}>
        <div className={classes.targetCircle}>
            <svg className={classes.progress} width="150" height="150" viewBox="0 0 150 150">
                <circle cx="75" cy="75" r="70" pathLength="1" className={classes.bg}/>
                <motion.circle
                    cx="75"
                    cy="75"
                    r="70"
                    pathLength="1"
                    strokeDasharray={`${percent} 1`}
                />
            </svg>
            <div className={classes.insideCircle}/>
            <div className={classes.insideIcon}>{children}</div>
        </div>
        <span>{title}</span>
    </div>
};

export default ConceptCircle;
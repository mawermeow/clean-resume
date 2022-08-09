import {FC} from 'react';
import classes from "./ProgressItem.module.css";
import {motion} from "framer-motion";

type ProgressItemProps = {title:string, width:string}



const ProgressItem:FC<ProgressItemProps> = ({title,width}) =>{
    return <>
        <div className={classes.progressItem}>
            <div className={classes.progressTitle}>{title}</div>
            <div className={classes.progress}>
                <motion.div className={classes.progressBar}
                            initial={{width:'0%'}}
                            whileInView={{width:width}}
                            viewport={{ once: true }}
                >
                    <motion.span
                        initial={{opacity:0}}
                        whileInView={{opacity:1}}
                        transition={{delay:1.0}}
                        viewport={{ once: true }}
                    >{width}</motion.span>
                </motion.div>
            </div>
        </div>
    </>
};

export default ProgressItem;
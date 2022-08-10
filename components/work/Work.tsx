import {FC} from 'react';
import classes from "./Work.module.css";
import Image from "next/image";
import {motion} from "framer-motion";

const workData = [
    {
        imgSrc: "/images/work/IMG_0071.jpeg",
        titlePosition: "FRONT END ENGINEERING / VISUAL DESIGN",
        titleCompany: "New Taipei City Farmers' Association Hope Plaza",
        location: "Banqiao District, New Taipei｜2017.03~2022.04",
        contentList: [
            "Clean farmer database, customer database and formulate specifications.", "Design and develop online registration system, front and back office of order system.", "Operate Facebook, Line@, and design related posters and promotional materials."]
    },
    {
        imgSrc: "/images/work/work-from-home.jpeg",
        titlePosition: "VISUAL DESIGN",
        titleCompany: "China Housing Economic Integration Development Association",
        location: "Zhongzheng District, Taipei｜2017.02~2020.12",
        contentList: [
            "Assist members in the foreign exchange market to establish trading strategies and capital management plans.", "Share transaction considerations and procedures for filing complaints with regulators.", "Design related posters and promotional materials."]
    },
    {
        imgSrc: "/images/work/private_board.png",
        titlePosition: "VISUAL DESIGN / COMMERCIAL DESIGN",
        titleCompany: "International Private Board Investment Holding Group",
        location: "Zhongzheng District, Taipei｜2015.07~2018.12",
        contentList: [
            "Analyze the feasibility of realizing the business model of new ventures.", "Assist SME owners in planning roadshow content and slideshows."]
    },
    {
        imgSrc: "/images/work/tku.jpg",
        titlePosition: "BACHELOR OF INFORMATION COMMUNICATION",
        titleCompany: "TAMKANG UNIVERSITY",
        location: "Tamsui District, New Taipei｜2012.09~2016.06",
        contentList: []
    },
    // {titlePosition:"",titleCompany:"",location:"",contentList:["",""]},
]


const Work: FC = () => {
    let isRight = true;
    return <div className={classes.work} id="work-education">
        <h1>Work & Education</h1>
        <ul className={classes.itemList}>
            <li className={classes.extend}/>
            {workData.map(item => {
                isRight = !isRight;
                return <li
                    className={isRight?classes.right:classes.left}
                    key={item.titleCompany}
                >
                    <div className={classes.timelineBadge}/>
                    <motion.div
                        initial={{
                            opacity: 0,
                            scale: 0.8
                        }}
                        whileInView={{
                            opacity: 1, scale: [0.8, 1], transition: {
                                type: "spring",
                                bounce: 0.6,
                                duration: 0.2
                            }
                        }}
                        viewport={{once: true}}
                        whileHover={{
                            translateY: -16,
                            transition: {duration: 0.1},
                        }}
                        className={`${classes.card} ${isRight ? classes.right : classes.left}`}>


                        <Image src={item.imgSrc} alt="" width={508} height={338}/>
                        <div className={classes.cardDescription}>
                            <h5>{item.titlePosition}</h5>
                            <h5>{item.titleCompany}</h5>
                            <h6>{item.location}</h6>
                            <ul>
                                {item.contentList.map(contentItem => <li key={contentItem}>{contentItem}</li>)}
                            </ul>
                        </div>
                    </motion.div>
                </li>

            })}
            <li className={classes.extend}/>
        </ul>
    </div>
};

export default Work;
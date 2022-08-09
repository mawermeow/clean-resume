import {FC, useState} from 'react';
import classes from './MainNavigation.module.css';
import MawerLogo from "../../ui/MawerLogo";
import MenuButton from "../../ui/MenuButton";
import {motion} from "framer-motion";
import Link from "next/link";

const navItems = [
    {title: "ABOUT ME", path: '#about-me'},
    {title: "WORK & EDUCATION", path: '#work-education'},
    {title: "MY CONCEPT", path: '#my-concept'},
    {title: "INTERESTS", path: '#interests'},
]
type MainNavigationProps = {isTop:boolean}

const MainNavigation: FC<MainNavigationProps> = ({isTop}) => {
    const [isMobileMode, setIsMobileMode] = useState(false);

    const openMobile = () => {
        setIsMobileMode(prev => !prev);
    };

    return <div className={classes.mainNavigation}>
        <div className={`${classes.topNavigation} ${isTop?'':classes.shadow}`}>
            <MawerLogo/>
            <MenuButton isClicked={isMobileMode} onClick={openMobile}/>
            <motion.nav className={classes.screenNav} animate={{color:'white'}}>
                {navItems.map(item=><li key={item.title}>
                    <a className={isTop?classes.isWhite:''} href={item.path}>
                    {/*<motion.a style={{color:isTop?'white':''}} >*/}
                        {item.title}
                    </a></li>)}
                    {/*</motion.a></li>)}*/}
            </motion.nav>
        </div>

        <nav className={`${classes.mobileNav} ${isMobileMode?classes.showMobileNav:''}`}>
            {navItems.map(item=><li key={item.title}>
                <Link href={item.path}>{item.title}</Link>
            </li>)}
        </nav>
        <motion.div className={classes.navigationBackground} animate={{opacity:isTop?0:1}}/>

    </div>
};

export default MainNavigation;
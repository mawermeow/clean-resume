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

type MainNavigationProps = { isTop: boolean }

const MainNavigation: FC<MainNavigationProps> = ({isTop}) => {
    const [isMobileMode, setIsMobileMode] = useState(false);

    const openMobile = () => {
        setIsMobileMode(prev => !prev);
    };

    const goHash = (hashValue: string) => {
        location.hash = hashValue;
        history.replaceState(undefined, "", "/");
        setIsMobileMode(false);
    };

    return <div className={classes.mainNavigation}>
        <div className={`${classes.topNavigation} ${isTop ? '' : classes.shadow}`}>
            <div className={classes.logo} onClick={()=>{goHash('#top')}}>
                <MawerLogo/>
            </div>
            <MenuButton isClicked={isMobileMode} onClick={openMobile}/>
            <motion.nav className={classes.screenNav} animate={{color: 'white'}}>
                {navItems.map(item => <li key={item.title}>
                    <a className={isTop ? classes.isWhite : ''} onClick={() => {
                        goHash(item.path)
                    }}>
                        {item.title}
                    </a></li>)}
            </motion.nav>
        </div>

        <nav className={`${classes.mobileNav} ${isMobileMode ? classes.showMobileNav : ''}`}>
            {navItems.map(item => <li key={item.title}>
                <a onClick={() => {
                    goHash(item.path)
                }}>
                    {item.title}
                </a>
            </li>)}
        </nav>
        <motion.div className={classes.navigationBackground} animate={{opacity: isTop ? 0 : 1}}/>

    </div>
};

export default MainNavigation;
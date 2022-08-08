import {FC, useState} from 'react';
import classes from './MainNavigation.module.css';
import MawerLogo from "../../ui/MawerLogo";
import MenuButton from "../../ui/MenuButton";

const navItems = [
    {title: "ABOUT ME", path: '/about-me'},
    {title: "WORK & EDUCATION", path: 'work-education'},
    {title: "LANGUAGE", path: 'language'},
    {title: "INTERESTS", path: 'interests'},
]

const MainNavigation: FC = () => {
    const [isMobileMode, setIsMobileMode] = useState(false);
    const [isMobileMoving, setIsMobileMoving] = useState(false);

    const openMobile = () => {
        setIsMobileMode(prev => !prev);
        setIsMobileMoving(prev=>!prev);
    };


    return <div className={classes.mainNavigation}>
        <div className={classes.topNavigation}>
            <MawerLogo/>
            <MenuButton isClicked={isMobileMode} onClick={openMobile}/>
            <nav className={classes.screenNav}>
                {navItems.map(item=><li key={item.title}><a>{item.title}</a></li>)}
            </nav>
        </div>

        <nav className={`${classes.mobileNav} ${isMobileMode?classes.showMobileNav:''}`}>
            {navItems.map(item=><li key={item.title}><a>{item.title}</a></li>)}
        </nav>

    </div>
};

export default MainNavigation;
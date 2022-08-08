import {FC, ReactNode, useEffect, useState} from 'react';
import classes from "./Layout.module.css";
import MainNavigation from "./MainNavigation";
import {motion, useScroll} from "framer-motion";

type LayoutProps = { children?: ReactNode }

const Layout: FC<LayoutProps> = ({children}) => {
    const { scrollY } = useScroll();
    const [step,setStep] = useState(0);

    useEffect(() => {
        return scrollY.onChange((latest) => {
            setStep(latest/3);
        })
    }, []);

    return <div className={classes.layout}>
        <div className={classes.navigation}>
            <MainNavigation/>
        </div>
        <div className={classes.main}>
            <section className={classes.header}>
                <motion.div className={classes.background} animate={{y:-step}}/>
                <div className={classes.title}>
                    <h1>Mawer</h1>
                    <h1>Huang</h1>
                    <span>FULL STACK DEVELOPER</span>
                </div>
            </section>
            <section className={classes.content}>
                {children}
            </section>
        </div>
    </div>
};

export default Layout;
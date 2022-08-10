import {FC, ReactNode, useEffect, useState} from 'react';
import classes from "./Layout.module.css";
import MainNavigation from "./MainNavigation";
import {motion, useScroll} from "framer-motion";
import Footer from "./Footer";

type LayoutProps = { children?: ReactNode }

const Layout: FC<LayoutProps> = ({children}) => {
    const { scrollY } = useScroll();
    const [step,setStep] = useState(0);
    const [isTop, setIsTop] = useState(true);

    useEffect(() => {
        scrollY.onChange((latest) => {
            setStep(latest/3);
            if(latest===0){
                setIsTop(true);
            }else{
                setIsTop(false);
            }

        })
    }, [scrollY]);

    return <div className={classes.layout}>
        <div className={classes.navigation}>
            <MainNavigation isTop={isTop}/>
        </div>
        <div className={classes.main}>
            <section className={classes.header}>
                <motion.div className={classes.background} animate={{y:-step}}/>
                <div className={classes.title}>
                    <div>
                        <h1>Mawer</h1>
                        <h1>Huang</h1>
                    </div>
                    <h4>FRONT END ENGINEER</h4>
                </div>
            </section>
            <section className={classes.content}>
                {children}
            </section>
        </div>
        <Footer/>
    </div>
};

export default Layout;
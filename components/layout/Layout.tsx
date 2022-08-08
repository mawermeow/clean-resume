import {FC, ReactNode} from 'react';
import classes from "./Layout.module.css";
import MainNavigation from "./MainNavigation";

type LayoutProps = {children?: ReactNode}

const Layout:FC<LayoutProps> = ({children}) =>{
    return <div className={classes.layout}>
        <div className={classes.header}>
            <MainNavigation/>
        </div>
        <div className={classes.main}>
            {children}
        </div>
    </div>
};

export default Layout;
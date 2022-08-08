import {FC, useState} from 'react';
import classes from "./MenuButton.module.css";

type MenuButtonProps = {isClicked:boolean, onClick:()=>void}

const MenuButton:FC<MenuButtonProps> = ({isClicked, onClick}) =>{

    return <div className={`${classes.menuButton} ${isClicked?classes.menuButtonActive:''}`} onClick={onClick}>
        <div className={`${classes.menuButtonTop} ${isClicked?classes.menuButtonTopActive:''}`}/>
        <div className={`${classes.menuButtonBottom} ${isClicked?classes.menuButtonBottomActive:''}`}/>
    </div>
};

export default MenuButton;
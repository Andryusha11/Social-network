import React from "react";
import { NavLink } from "react-router-dom";
import cls from './DialogItem.module.css';

// function activeClassName
const setActive = ({isActive}) => isActive ? cls.active : cls.a;

const DialogItem = (props) => {
	let path = '/Dialogs/' + props.id;
	return (
		<div className={cls.dialogs__user}>
			<NavLink to={path} className={setActive}>{props.name}</NavLink>
		</div>
	)
}  

export default DialogItem;
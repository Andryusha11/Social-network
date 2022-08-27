import React from 'react';
import { NavLink } from 'react-router-dom';
import cls from './Navbar.module.css';

// function activeClassName
const setActive = ({isActive}) => isActive ? cls.active : cls.a; 

const Navbar = () => {
	return (
		<nav className={cls.nav}>
				<div className={cls.item}>
					<NavLink to='/Profile' className={setActive}>Profile</NavLink>
				</div>
				<div className={cls.item}>
					<NavLink to='/Dialogs' className={setActive}>Messages</NavLink>
				</div>
				<div className={cls.item}>
					<NavLink to='/News' className={setActive}>News</NavLink>
				</div>
				<div className={cls.item}>
					<NavLink to='/Music' className={setActive}>Music</NavLink>
				</div>
				<div className={cls.item}>
					<NavLink to='/Setting' className={setActive}>Settings</NavLink>
				</div>
		</nav>
	)
}

export default Navbar;
import React from 'react';
import { Link } from "react-router-dom";
import menus from "./configs/menus";
import "./style.css";
const LeftMenu = () => (
	<div className="left-container">
		{
			menus.left.map(item => (
				<Link to={item.route} className="link">{item.name}</Link>
			))
		}
	</div>
)
export default LeftMenu;
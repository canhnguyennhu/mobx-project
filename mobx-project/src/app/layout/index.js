import React from 'react';
import { observer } from 'mobx-react'
import { getInstanceStores } from '../stores/Store'
import Header from "./components/Header";
import LeftMenu from "./components/LeftMenu";
import MainBody from "./components/MainBody";
import "./style.css"

const MainLayout = observer( ({ children }) =>  {

	return (
			<div className="main-layout">
				<Header/>
				<div className="main-container">
					<LeftMenu/>
					<MainBody>
						{children}
					</MainBody>
				</div>
			</div>
	);
})

export default MainLayout
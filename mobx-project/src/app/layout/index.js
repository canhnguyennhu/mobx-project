import React from 'react';
import { observer } from 'mobx-react'
import { getInstanceStores } from '../stores/Store'
import Header from "./components/Header";
import LeftMenu from "./components/LeftMenu";
import MainBody from "./components/MainBody";
import Book from "../components/Book";
import "./style.css"

const MainLayout = observer( ({ children }) =>  {
	const { bookStore } = getInstanceStores();
	console.log("bookStore.openingNewBook:", bookStore.openingNewBook)
	return (
			<div className="main-layout">
				<Header/>
				<div className="main-container">
					<LeftMenu/>
					<MainBody>
						{children}
					</MainBody>
				</div>
				{
					bookStore.openingNewBook && <Book></Book>
				}
			</div>
	);
})

export default MainLayout
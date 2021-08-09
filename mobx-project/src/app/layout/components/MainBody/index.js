
import React, { useState }from 'react';
import { observer } from 'mobx-react'
import { getInstanceStores } from '../../../stores/Store'
import "./style.css";

const MainBody = observer(({ children }) => {
	const { bookStore } = getInstanceStores();
	const addNewBook = () => {
		bookStore.setOpeningNewBook(true)
	}
	return (
		<div className="body-container">
			<div className="main-bar">
				<button className="btn btn-add" onClick={addNewBook}>Add New Book</button>
			</div>
			{
				children
			}
		</div>
	)
})
export default MainBody;
import { observer } from 'mobx-react'
import MainLayout from "../layout"
import { getInstanceStores } from '../stores/Store'
import { getBookTypeFromPathName } from '../services/helper'
import "./style.css";

const Home = observer(({ location }) => {
	const { bookStore } = getInstanceStores();
	const type = getBookTypeFromPathName(location.pathname);
	const books = !type || type === "home" 
		? bookStore.fetchAll
		: bookStore.books[type];
	return (
		<MainLayout>
			{
				<div className="books-container">
					{
						books.map(book => (
							<div className="book-item">
								<div className="book-icon"/>
								<div className="book-name">{book.name}</div>
								<div className="book-author">by {book.author}</div>
							</div>
						))
					}
				</div>
			}
		</MainLayout>
	)
})

export default Home;
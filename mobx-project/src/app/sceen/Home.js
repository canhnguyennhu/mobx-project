import { observer } from 'mobx-react'
import MainLayout from "../layout"
import { getInstanceStores } from '../stores/Store'
import "./style.css";

const Home = observer(({ location }) => {
	const { bookStore } = getInstanceStores();
	const type = location.pathname.split('/')[1];
	const books = !type || type === "home" 
		? bookStore.fetchAll
		: bookStore.books[type];
	return (
		<MainLayout>
			{
				<div className="books-container">
					{
						books.map(book => (
							<div className="book-item">{book.name}</div>
						))
					}
				</div>
			}
		</MainLayout>
	)
})

export default Home;
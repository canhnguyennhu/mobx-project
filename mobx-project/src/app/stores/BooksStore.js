import { makeObservable, observable, action, computed } from "mobx";
import data from "./dummy/data.json";

export default class BooksStore {
	
	books = {};
	openingNewBook = false;

	initBooks () {
		this.books = data;
	}

	constructor() {
		makeObservable(this, {
			books: observable,
			openingNewBook: observable,
			updateBook: action,
			setOpeningNewBook: action,
			fetchAll: computed,
		});
		this.initBooks();
	}

	get fetchAll () {
		const fetchArr = [];
		for (let key in this.books) {
			fetchArr.push(...this.books[key])
		}
		return fetchArr;
	}

	setOpeningNewBook (value) {
		this.openingNewBook = value;
	}

	updateBook (book, type) {
		console.log(type, book)
		this.books[type] && this.books[type].push(book);
	}
}

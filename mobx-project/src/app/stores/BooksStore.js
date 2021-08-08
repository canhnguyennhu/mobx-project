import { makeObservable, observable, action, computed } from "mobx";
import data from "./dummy/data.json";

export default class BooksStore {
	
	books = {}

	initBooks () {
		this.books = data;
	}

	constructor() {
		makeObservable(this, {
			books: observable,
			updateBook: action,
			fetchAll: computed,
			// fetchByType: computed,
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

	updateBook (book, type) {
		// this.data = data;
	}
}

import BooksStore from './BooksStore';

export const initStore = () => ({
	bookStore: new BooksStore()
})

let instanceStores;
export const getInstanceStores = () => {
	if (!instanceStores) {
		instanceStores = initStore();
	}
	return instanceStores;
}
import './App.css';
import {Provider as StoreProvider } from 'mobx-react'
import { getInstanceStores } from './stores/Store'
import Routes from './sceen/routes';

function App() {
  return (
		<StoreProvider {...getInstanceStores()}>
			<div className="App">
				<Routes></Routes>
			</div>
		</StoreProvider>
  );
}

export default App;

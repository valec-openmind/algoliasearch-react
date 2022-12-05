import React from 'react';
// import './App.scss';

import algoliasearch from 'algoliasearch/lite';
import { Hits, InstantSearch, SearchBox } from 'react-instantsearch-hooks-web';
import Hit from './components/Hit';

const searchClient = algoliasearch('latency', '6be0576ff61c053d5f9a3225e2a90f76');

function App() {
	return (
			<InstantSearch searchClient={searchClient} indexName="instant_search">
				<SearchBox />
				<Hits hitComponent={Hit} />
			</InstantSearch>
	);
}

export default App;

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Page } from '../page/Page';
import { Navbar } from '../navbar/Navabar';
import './App.css';

const App = () => {
	return (
		<div className="App">
			<Page />
		</div>
	);
};

export default App;

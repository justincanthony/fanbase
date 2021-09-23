import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Navbar } from '../navbar/Navabar';
import './App.css';

const App = () => {
	return (
		<div className="App">
			<Navbar />
		</div>
	);
};

export default App;

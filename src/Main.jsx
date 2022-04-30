import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Components
import Calendar from "./pages/Calendar";
import App from "./pages/App";

function Main() {
	return (
	  <div className="main">
	  	<Routes>
		  <Route path="/" element={<App/>} exact />
	      <Route path="/calendar" element={<Calendar/>} exact />
		</Routes>
	  </div>
	);
}

export default Main;

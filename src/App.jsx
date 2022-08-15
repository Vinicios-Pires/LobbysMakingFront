import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoadingContext from "./contexts/LoadingContext";
import UserContext from "./contexts/UserContext";

import Home from "./components/home";
import Signin from "./components/signin";

import "./styles/reset.css";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
	const [isLoading, setIsLoading] = useState(false);
	const [user, setUser] = useState(null);

	return (
		<>
			<GlobalStyle />
			<LoadingContext.Provider value={(isLoading, setIsLoading)}>
				<UserContext.Provider value={(user, setUser)}>
					<BrowserRouter>
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/login" element={<Signin />} />
						</Routes>
					</BrowserRouter>
				</UserContext.Provider>
			</LoadingContext.Provider>
		</>
	);
}

export default App;

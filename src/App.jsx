import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { UserProvider } from "./contexts/UserContext";

import Home from "./components/home";
import Signin from "./components/signin";
import Signup from "./components/signup";

import "./styles/reset.css";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
	const [user, setUser] = useState(null);

	return (
		<>
			<GlobalStyle />
			<UserProvider>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/login" element={<Signin />} />
						<Route path="/sign-up" element={<Signup />} />
					</Routes>
				</BrowserRouter>
			</UserProvider>
		</>
	);
}

export default App;

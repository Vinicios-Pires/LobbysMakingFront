import { BrowserRouter, Routes, Route } from "react-router-dom";

import { UserProvider } from "./contexts/UserContext";

import Home from "./components/home";
import Signin from "./components/signin";
import Signup from "./components/signup";
import Lobbys from "./components/lobbys";

import "./styles/reset.css";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
	return (
		<>
			<GlobalStyle />
			<UserProvider>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/login" element={<Signin />} />
						<Route path="/sign-up" element={<Signup />} />
						<Route path="/lobbys" element={<Lobbys />} />
					</Routes>
				</BrowserRouter>
			</UserProvider>
		</>
	);
}

export default App;

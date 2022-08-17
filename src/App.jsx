import { BrowserRouter, Routes, Route } from "react-router-dom";

import { UserProvider } from "./contexts/UserContext";

import Home from "./components/home";
import Signin from "./components/signin";
import Signup from "./components/signup";
import Lobbys from "./components/lobbys";

import "./styles/reset.css";
import GlobalStyle from "./styles/GlobalStyle";
import { ProtectedRoute } from "./components/protectedRoute";

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
						<Route
							path="/lobbys"
							element={
								<ProtectedRoute>
									<Lobbys />
								</ProtectedRoute>
							}
						/>
					</Routes>
				</BrowserRouter>
			</UserProvider>
		</>
	);
}

export default App;

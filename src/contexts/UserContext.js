import { createContext, useState } from "react";

export const UserContext = createContext();

export function UserProvider({ children }) {
	const [token, setToken] = useState(localStorage.getItem("token") || "");
	const [user, setUser] = useState(
		JSON.parse(localStorage.getItem("user")) || {}
	);

	const logUserIn = ({ user, token }) => {
		localStorage.setItem("token", token);
		localStorage.setItem("user", JSON.stringify(user));
		setToken(token);
		setUser(user);
	};

	const logUserOut = () => {
		localStorage.removeItem("token");
		localStorage.removeItem("user");
		setToken("");
		setUser({});
	};

	return (
		<UserContext.Provider value={{ token, logUserIn, logUserOut, user }}>
			{children}
		</UserContext.Provider>
	);
}

// import axios from "axios";
// import {useEffect} from "react"
import { createContext, useState } from "react";

export const UserContext = createContext();

export function UserProvider({ children }) {
	const [userToken, setUserToken] = useState("");
	const [userInfo, setUserInfo] = useState({});

	// useEffect(() => {
	// 	const token = JSON.parse(localStorage.getItem("token"));
	// 	if (token) {
	// 		const url = `${process.env.REACT_APP_API_URL}/validateToken`;
	// 		const config = {
	// 			headers: {
	// 				Authorization: `Bearer ${token}`,
	// 			},
	// 		};

	// 		axios
	// 			.post(url, {}, config)
	// 			.then(({ data }) => {
	// 				const { token, ...userData } = data;
	// 				setUserToken(token);
	// 				setUserInfo(userData);
	// 			})
	// 			.catch(() => {
	// 				localStorage.removeItem("token");
	// 				localStorage.removeItem("userInfo");
	// 			});
	// 	}
	// }, []);

	const logUserIn = (userInfo) => {
		const { token, id, username } = userInfo;
		localStorage.setItem("token", JSON.stringify(token));
		localStorage.setItem("userInfo", JSON.stringify({ id, username }));
		setUserToken(token);
		setUserInfo({ id, username });
	};

	const logUserOut = () => {
		localStorage.removeItem("token");
		localStorage.removeItem("userInfo");
		setUserToken("");
		setUserInfo({});
		window.location.reload();
	};

	return (
		<UserContext.Provider
			value={{ userToken, logUserIn, logUserOut, userInfo }}
		>
			{children}
		</UserContext.Provider>
	);
}

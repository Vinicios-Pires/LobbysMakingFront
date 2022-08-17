import axios from "axios";
import { useEffect, useRef, useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";

export function ProtectedRoute({ children }) {
	const navigate = useRef(useNavigate());
	const { token, setUser, logUserOut } = useContext(UserContext);

	useEffect(() => {
		if (!token) {
			navigate.current("/login");
			return;
		}

		const config = {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		};

		axios
			.get(`${process.env.REACT_APP_API_URL}/user`, config)
			.then(setUser)
			.catch(() => {
				logUserOut();
			});
	}, []);
	return children;
}

import axios from "axios";
import { useContext, useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

import { Input, Button } from "./signin.styled";

import { UserContext } from "./../../contexts/UserContext";

export default function Inputs() {
	const navigate = useRef(useNavigate());
	const { token, logUserIn } = useContext(UserContext);

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		if (token) navigate.current("/lobbys");
	}, [token]);

	async function handleSubmit(e) {
		e.preventDefault();

		if (!isLoading) {
			setIsLoading(true);
			axios
				.post(`${process.env.REACT_APP_API_URL}/signin`, {
					email,
					password,
				})
				.then(({ data }) => {
					logUserIn(data);
					navigate.current("/lobbys");
				})
				.catch(() => alert("Nao foi possivel fazer o login :("))
				.finally(() => setIsLoading(false));
		}
	}

	return (
		<>
			<Input
				placeholder="Seu email"
				type="text"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				required
			/>
			<Input
				placeholder="Sua senha"
				type="password"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
				required
			/>
			<Button type="submit" onClick={handleSubmit}>
				{isLoading ? "Entrando..." : "Entrar"}
			</Button>
		</>
	);
}

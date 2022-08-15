import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { Input, Button } from "./signup.styled";

export default function Inputs() {
	const navigate = useNavigate();

	const [email, setEmail] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const [isLoading, setIsLoading] = useState(false);

	async function handleSubmit(e) {
		e.preventDefault();

		setIsLoading(true);

		try {
			await axios.post(`${process.env.REACT_APP_API_URL}/signup`, {
				email,
				username,
				password,
			});

			alert("Cadastrado com sucesso!");
			navigate("/login");
		} catch (e) {
			alert("Infelizmente nao foi possivel realizar o cadastro :(");
			console.log(e);
		} finally {
			setIsLoading(false);
		}
	}

	return (
		<>
			<Input
				placeholder="Seu email"
				type="text"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
			/>
			<Input
				placeholder="Seu nick"
				type="text"
				value={username}
				onChange={(e) => setUsername(e.target.value)}
			/>
			<Input
				placeholder="Sua senha"
				type="password"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
			/>
			<Button type="submit" onClick={handleSubmit}>
				{isLoading ? "Cadastrando..." : "Cadastrar"}
			</Button>
		</>
	);
}

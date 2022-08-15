import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { Input, Button } from "./signin.styled";

import UserContext from "./../../contexts/UserContext";

export default function Inputs() {
	const navigate = useNavigate();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const { user, setUser } = useContext(UserContext);
	const [isLoading, setIsLoading] = useState(false);

	async function handleSubmit(e) {
		e.preventDefault();

		setIsLoading(true);

		try {
			const response = await axios.post(
				`${process.env.REACT_APP_API_URL}/signin`,
				{
					email,
					password,
				}
			);

			setUser(response.data);
			console.log(user.id);
			alert("Logado com sucesso!");
			navigate("/lobbys");
		} catch (e) {
			alert("Infelizmente nao foi possivel realizar o login :(");
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
				placeholder="Sua senha"
				type="password"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
			/>
			<Button type="submit" onClick={handleSubmit}>
				{isLoading ? "Entrando..." : "Entrar"}
			</Button>
		</>
	);
}

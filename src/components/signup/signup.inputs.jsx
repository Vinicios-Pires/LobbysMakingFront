import axios from "axios";
import { useRef, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import { Input, Button, ToSignIn, Form } from "./signup.styled";

export default function Inputs() {
	const navigate = useRef(useNavigate());

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
			navigate.current("/login");
		} catch (e) {
			alert("Infelizmente nao foi possivel realizar o cadastro :(");
		} finally {
			setIsLoading(false);
		}
	}

	return (
		<>
			<Form onSubmit={handleSubmit}>
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
				<Button id="submit_btn_signup" type="submit" onClick={handleSubmit}>
					{isLoading ? "Cadastrando..." : "Cadastrar"}
				</Button>
				<Link to="/login">
					<ToSignIn>Já possui uma conta? Faça seu login</ToSignIn>
				</Link>
			</Form>
		</>
	);
}

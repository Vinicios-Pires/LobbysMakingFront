import { Link } from "react-router-dom";

import { HeaderLobby } from "../header";
import Inputs from "./signup.inputs";

import { Container, ToSignIn } from "./signup.styled";

export default function Signup() {
	return (
		<>
			<HeaderLobby />
			<Container>
				<Inputs />
				<Link to="/login">
					<ToSignIn>Já possui uma conta? Faça seu login</ToSignIn>
				</Link>
			</Container>
		</>
	);
}

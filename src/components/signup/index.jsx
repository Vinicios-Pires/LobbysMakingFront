import { Link } from "react-router-dom";

import { HeaderClean } from "../header";
import Inputs from "./signup.inputs";

import { Container, ToSignIn } from "./signup.styled";

export default function Signup() {
	return (
		<>
			<HeaderClean />
			<Container>
				<Inputs />
				<Link to="/login">
					<ToSignIn>Já possui uma conta? Faça seu login</ToSignIn>
				</Link>
			</Container>
		</>
	);
}

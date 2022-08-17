import { Link } from "react-router-dom";

import { HeaderClean } from "../header";
import Inputs from "./signin.inputs";

import { Container, ToSignUp } from "./signin.styled";

export default function Signin() {
	return (
		<>
			<HeaderClean />
			<Container>
				<Inputs />
				<Link to="/sign-up">
					<ToSignUp>Ainda não possui uma conta?</ToSignUp>
				</Link>
			</Container>
		</>
	);
}

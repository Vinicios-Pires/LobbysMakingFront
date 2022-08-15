import { Link } from "react-router-dom";

import {
	HeaderContainer,
	ContainerHome,
	ButtonLoginHome,
} from "./header.styled";

export function HeaderHome() {
	return (
		<HeaderContainer>
			<ContainerHome>
				<h1>Lobby's Making</h1>
				<Link to="/login">
					<ButtonLoginHome>ENTRAR</ButtonLoginHome>
				</Link>
			</ContainerHome>
		</HeaderContainer>
	);
}

export function HeaderLobby() {
	return <HeaderContainer></HeaderContainer>;
}

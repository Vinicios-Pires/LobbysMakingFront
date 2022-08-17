import axios from "axios";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";

import { CreatorButton } from "./../lobbys/lobbys.styled";

import {
	HeaderContainer,
	ContainerHome,
	ButtonLoginHome,
	HeaderLobbyContainer,
} from "./header.styled";

export function HeaderClean() {
	return <HeaderContainer></HeaderContainer>;
}

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
	const { token } = useContext(UserContext);
	const [isLoading, setIsLoading] = useState(false);

	function createLobby(e) {
		setIsLoading(true);

		const data = {};

		const config = {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		};

		axios
			.post(`${process.env.REACT_APP_API_URL}/lobby`, data, config)
			.then((response) => {
				setIsLoading(false);
				alert("Lobby criada com sucesso!");
			})
			.catch(({ response }) => {
				e.preventDefault();
				setIsLoading(false);
				alert(response.data || "Houve um erro ao criar a lobby.");
			});
	}

	return (
		<HeaderContainer>
			<HeaderLobbyContainer>
				<CreatorButton onClick={createLobby} disabled={isLoading}>
					{isLoading ? "Criando Lobby" : "Criar Lobby"}
				</CreatorButton>
			</HeaderLobbyContainer>
		</HeaderContainer>
	);
}

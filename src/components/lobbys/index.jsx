import axios from "axios";
import { useContext, useState } from "react";
import { HeaderLobby } from "../header";
import { Container } from "./lobbys.styled";
import { UserContext } from "../../contexts/UserContext";

export default function Lobbys() {
	const { userToken } = useContext(UserContext);
	const [isLoading, setIsLoading] = useState(false);

	function createLobby(e) {
		setIsLoading(true);

		const data = {};

		const config = {
			headers: {
				Authorization: `Bearer ${userToken}`,
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
		<>
			<HeaderLobby />
			<Container>
				<button onClick={createLobby} disabled={isLoading}>
					{isLoading ? "Criando Lobby" : "Criar Lobby"}
				</button>
			</Container>
		</>
	);
}

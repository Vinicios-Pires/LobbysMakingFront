import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { HeaderLobby } from "../header";
import {
	Container,
	LobbyInterface,
	ButtonChallenge,
	LobbyTitle,
	PlayerName,
} from "./lobbys.styled";

export default function Lobbys() {
	const [lobbys, setLobbys] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const { token, user } = useContext(UserContext);

	useEffect(() => {
		if (token) {
			const config = {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			};

			axios
				.get(`${process.env.REACT_APP_API_URL}/lobby`, config)
				.then(({ data }) => setLobbys(data))
				.catch(() => {
					window.alert(
						"An error occured while trying to fetch the lobby's, please refresh the page"
					);
				})
				.finally(() => setIsLoading(false));
		}
	}, []);

	if (isLoading) return <Container>Loading</Container>;

	function handleChallenge() {
		console.log("VOU DESAFIAR VOCE");
	}

	return (
		<>
			<HeaderLobby />
			<Container>
				{lobbys?.map((lobby) => (
					<LobbyInterface key={lobby.id}>
						<LobbyTitle>
							{lobby.user.username === user.username
								? "SUA SALA"
								: "SALA ADVERSARIA"}
						</LobbyTitle>
						<PlayerName>{lobby.user.username}</PlayerName>
						{lobby.user.username !== user.username ? (
							<ButtonChallenge onClick={handleChallenge}>
								DESAFIAR
							</ButtonChallenge>
						) : (
							""
						)}
					</LobbyInterface>
				))}
			</Container>
		</>
	);
}

import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { HeaderLobby } from "../header";
import { Container } from "./lobbys.styled";

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
	}, [token]);

	console.log(lobbys);

	if (isLoading) return <Container>Loading</Container>;

	return (
		<>
			<HeaderLobby />
			<Container>
				{lobbys.length > 0 ? lobbys.map((lobby) => {}) : "Sem lobby's"}
			</Container>
		</>
	);
}

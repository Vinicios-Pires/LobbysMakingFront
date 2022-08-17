import axios from "axios";
import { useContext, useState } from "react";
import { HeaderLobby } from "../header";
import { Container, CreatorButton } from "./lobbys.styled";
import { UserContext } from "../../contexts/UserContext";

export default function Lobbys() {
	const { userToken } = useContext(UserContext);
	const [isLoading, setIsLoading] = useState(false);

	return (
		<>
			<HeaderLobby />
			<Container></Container>
		</>
	);
}

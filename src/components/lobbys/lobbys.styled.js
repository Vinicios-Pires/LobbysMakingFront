import styled from "styled-components";

export const Container = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const CreatorButton = styled.button`
	width: 100px;
	height: 40px;

	border-radius: 10px;

	background-color: #2c97de;

	color: white;
	font-weight: 700;
	letter-spacing: 1px;

	:hover {
		cursor: pointer;
	}
`;

export const LogoutButton = styled.button`
	width: 100px;
	height: 40px;

	border-radius: 10px;

	background-color: #2c97de;

	color: white;
	font-weight: 700;
	letter-spacing: 1px;

	:hover {
		cursor: pointer;
	}
`;

export const LobbyInterface = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 20px;
	background-color: darkslategray;
	width: 180px;
	height: 120px;
	padding: 10px;
	margin: 20px;
	border: 2px solid black;
	border-radius: 5%;
`;

export const LobbyTitle = styled.p`
	color: white;
	font-weight: 700;
	letter-spacing: 0.29px;
`;

export const PlayerName = styled.p`
	color: white;
	letter-spacing: 1px;
`;

export const ButtonChallenge = styled.button`
	width: 150px;
	height: 40px;

	border-radius: 10px;

	background-color: green;

	color: white;
	font-weight: 700;
	letter-spacing: 1px;

	:hover {
		cursor: pointer;
		background-color: #43bc2b;
	}
`;

import styled from "styled-components";

export const Container = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const CreatorButton = styled.button`
	width: 100px;
	height: 40px;

	border-radius: 20%;

	background-color: #2c97de;

	color: white;
	font-weight: 700;
	letter-spacing: 1px;

	:hover {
		cursor: pointer;
	}
`;

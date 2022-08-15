import styled from "styled-components";

export const HeaderContainer = styled.div`
	width: 100vw;
	height: 70px;

	display: flex;
	position: fixed;
	top: 0;
	left: 0;

	background: rgb(88, 206, 194);
	background: linear-gradient(
		90deg,
		rgba(88, 206, 194, 1) 43%,
		rgba(249, 176, 9, 1) 64%
	);
`;

export const ContainerHome = styled.div`
	width: 100vw;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 30px;
`;

export const ButtonLoginHome = styled.button`
	width: 100px;
	height: 40px;

	border-radius: 20%;

	background-color: #2c97de;

	color: white;
	font-weight: 700;
	letter-spacing: 3px;

	:hover {
		cursor: pointer;
	}
`;

import styled from "styled-components";

export const Container = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const ToSignUp = styled.h1`
	color: white;
	font-size: 20px;
	letter-spacing: 0.2rem;
`;

export const Input = styled.input`
	width: 30%;
	height: 5%;

	padding: 5px;
	font-size: 20px;
	color: black;

	margin-bottom: 10px;

	border-radius: 12px;

	:last-of-type {
		margin-bottom: 20px;
	}
`;

export const Button = styled.button`
	width: 23%;
	height: 3%;

	font-size: 20px;

	border-radius: 12px;

	margin-bottom: 30px;
`;

import styled from "styled-components";

export const NavigationStyled = styled.nav`
	outline: 2px solid red;
	z-index: 101;
	width: 100%;
	height: 60px;
	display: flex;
	position: relative;
	margin-bottom: 10px;
	justify-content: space-between;

	& > div:nth-child(1) {
		width: 30%;
		display: flex;
		padding-left: 10px;
		align-items: center;

		span {
			font-size: 1.5rem;
			line-height: 1.5rem;
			color: rgb(244, 235, 232);
			font-family: "Smooch Sans", sans-serif;
		}
	}

	& > div:nth-child(2) {
		display: flex;
		& > ul {
			gap: 30px;
			display: flex;
			align-items: center;
			color: rgb(244, 235, 232);
			justify-content: space-between;

			& > li {
				font-size: 1.5rem;
				line-height: 1.5rem;
				font-family: "Smooch Sans", sans-serif;
			}
		}
	}

	& > div:nth-child(3) {
		gap: 15px;
		width: 30%;
		display: flex;
		padding-right: 15px;
		justify-content: flex-end;

		& > a {
			width: fit-content;
			width: fit-content;
		}

		.icon {
			gap: 5px;
			color: white;
			display: flex;
			font-size: 1.75rem;
			align-items: center;
		}
	}
`;

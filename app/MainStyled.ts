import styled from "styled-components";

export const MainStyled = styled.main`
	@media (min-width: 200px) {
		gap: 10px;
		display: flex;
		padding: 3% 10px;
		min-height: 100vh;
		flex-direction: column;
		justify-content: center;
		background-color: #030911;

		.left,
		.right {
			width: 100%;
			display: flex;
			padding: 7% 5px 7% 5px;
			position: relative;
			height: fit-content;
			flex-direction: column;
		}

		.paladin {
			display: none;
		}

		nav {
			display: none;
		}

		.right {
			gap: 70px;
			align-items: center;
		}

		.left {
			gap: 25px;
			position: relative;
			height: fit-content;
			justify-content: space-between;

			.head {
				gap: 10px;
				display: flex;
				flex-direction: column;
			}

			.resume {
				width: 340px;
				p {
					color: rgba(214, 252, 255, 0.65);
				}
			}

			h1 {
				color: #ff003c;
				font-size: 2.8rem;
				line-height: 1.2;
				font-weight: bold;
			}

			h3 {
				color: #fafafa;
				line-height: 1;
				font-size: 1.14rem;
			}

			.socials {
				ul {
					gap: 10px;
					display: flex;
				}

				.icons {
					width: 25px;
					height: 25px;
				}
			}
		}
	}

	@media (min-width: 950px) {
		padding-top: 0;
		padding-bottom: 0;
		flex-direction: row;

		.paladin {
			display: block;
			& > .pld {
				opacity: 0.05;
			}
		}

		nav {
			display: block;
			ul {
				gap: 5px;
				display: flex;
				flex-direction: column;
			}
			li {
				color: white;
			}
		}

		.left,
		.right {
			min-height: 100vh;
		}

		.left {
			top: 0;
			width: 35%;
			position: sticky;
		}

		.right {
			width: 65%;
		}
	}

	@media (min-width: 1200px) {
		.left {
			width: 30%;
		}

		.right {
			width: 45%;
		}
	}
`;

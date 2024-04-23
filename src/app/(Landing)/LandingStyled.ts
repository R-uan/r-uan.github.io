import styled from "styled-components";

export const LandingStyled = styled.main`
	gap: 5px;
	width: 100%;
	height: calc(100vh - 90px);
	display: flex;
	position: relative;
	flex-direction: column;

	.hello {
		flex: 1;
		gap: 5px;
		display: flex;

		& > div:first-child {
			width: 100%;
			display: flex;
			margin: 15px;
			justify-content: space-evenly;

			.information {
				left: 0;
				bottom: 5%;
				margin: 5px;
				position: absolute;
				height: fit-content;
				.code {
					display: flex;
					gap: 10px;
					.keyword {
						color: #015d82;
					}

					.variable {
						color: #00cc99;
					}
				}
			}

			.extra {
				display: flex;
				width: fit-content;
				align-items: center;
				.home-img {
					width: 350px;
					height: 350px;
					border-radius: 6px;
					background-size: cover;
					background-repeat: no-repeat;
					background-image: url("home/ballin.jpg");
				}
			}

			.landing {
				width: fit-content;
				height: 100%;
				padding: 5px;
				display: flex;
				position: relative;
				align-items: center;

				& > div:first-child {
					color: white;
					transform: translateY(-40%);
				}
			}
		}
	}
`;

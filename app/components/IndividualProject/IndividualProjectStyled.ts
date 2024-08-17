import styled from "styled-components";

export const IndividualProjectStyled = styled.div`
	@media (min-width: 200px) {
		gap: 10px;
		width: 100%;
		display: flex;
		border-radius: 4px;
		position: relative;
		flex-direction: column;
		justify-content: center;
		transition: all ease-in-out 0.15s;

		.external {
			position: absolute;
			width: 100%;
			height: 100%;
			z-index: 6;
		}

		&:hover {
			transition: all ease-in-out 0.15s;
			box-shadow: 0px 0px 10px 0px rgba(214, 252, 255, 0.4);
		}

		.image {
			z-index: 1;
			width: 100%;
			height: 100%;
			overflow: hidden;
			position: absolute;
			border-radius: 4px;
			background-color: black;

			.image {
				object-fit: cover;
				filter: opacity(0.15);
			}
		}

		.summary {
			padding: 7px 14px;
			z-index: 2;
			flex: 1 1 0%;
		}

		.title {
			gap: 10px;
			display: flex;
			width: fit-content;
			align-items: center;

			h1 {
				color: white;
				font-weight: bold;
				font-size: 1.2rem;
			}
		}

		.description {
			p {
				font-size: 0.9rem;
				color: rgba(214, 252, 255, 0.65);
			}
		}

		.stack {
			margin-top: 7px;
			ul {
				gap: 5px;
				display: flex;
				flex-wrap: wrap;

				li {
					color: #96bbd9;
					font-weight: 500;
					font-size: 0.9rem;
					padding: 3px 10px;
					border-radius: 60px;
					background-color: #050a0e;
					border: 1px solid #050a0e;
				}
			}
		}
	}
`;

import styled from "styled-components";

export const DevstackStyled = styled.div`
	@media (min-width: 200px) {
		gap: 10px;
		width: 100%;
		display: flex;
		align-items: center;
		flex-direction: column;

		.skills {
			gap: 5px;
			width: 100%;
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
		}

		.tech {
			color: rgba(165, 165, 255, 1);
		}

		.skill {
			width: 45px;
			height: 45px;
			display: flex;
			border-radius: 6px;
			align-items: center;
			flex-direction: column;
			justify-content: center;
			background-color: #151c28;

			.icon {
				width: 55%;
				height: 55%;
			}

			span {
				font-size: 1.3rem;
				line-height: 1.5rem;
			}
		}
	}

	@media (min-width: 950px) {
		.skill {
			width: 60px;
			height: 60px;
		}
	}
`;

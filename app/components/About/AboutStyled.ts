import styled from "styled-components";

export const AboutStyled = styled.div`
	@media (min-width: 200px) {
		gap: 30px;
		display: flex;
		align-items: center;
		flex-direction: column;

		.content {
			gap: 15px;
			width: 100%;
			display: flex;
			height: fit-content;
			flex-direction: column;

			p {
				font-size: 1.05rem;
				line-height: 1.55;
				color: rgba(214, 252, 255, 0.65);

				b {
					color: #00f0ff;
				}
			}
		}
	}
`;

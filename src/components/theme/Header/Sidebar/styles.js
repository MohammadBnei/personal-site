import styled from 'styled-components';

export const Wrapper = styled.div`
    position: fixed;
    z-index: 4;
    overflow: auto;
    top: 0px;
    right: -275px;
    width: 0;
    opacity: 0;
    height: 100%;
    transition: all 1s ease;
    background-color: #fff;

    ${({ active }) =>
        active &&
        `
			width: 20%;
			right: 0px;
			opacity: 1;

			@media (max-width: 960px) {
				width: 40%;
			}

			@media (max-width: 600px) {
				width: 75%;
			}
	`}
`;

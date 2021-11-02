import styled from 'styled-components';
import Box from '@mui/material/Box';

export const LandingBox = styled(Box)`
	width: 100%;
	height: 80%;
	.react-multi-carousel-list {
		width: 100%;
		height: 100%;
		margin: 0 auto 1rem;
		.react-multi-carousel-track {
			height: 100%;
			.react-multi-carousel-item {
				height: 100%;
				img {
					width: 100%;
					height: 100%;
					object-fit: cover;
					@media only screen and (max-width: 480px) {
						height: 100%;
					}
				}
			}
		}
	}
	@media only screen and (max-width: 480px) {
		height: 60%;
		margin-top: 1rem;
	}
`;

import styled from 'styled-components';
import Box from '@mui/material/Box';

export const DetailBox = styled(Box)`
	width: 95%;
	height: 50%;
	margin: 0 auto;
	.MuiGrid-root {
		width: 100%;
		margin: 1rem 0;
	}
	.MuiGrid-root > .MuiGrid-item {
		img {
			width: 100%;
			height: 70%;
			object-fit: contain;
		}
	}
`;

export const ProductInfoBox = styled(Box)`
	width: 100%;
	margin: 0 auto;
`;

export const ProductDetailsBox = styled(Box)`
	width: 95%;
	padding: 1rem 0.5rem;
`;
export const ProductInfoBoxChild = styled(Box)`
	width: 95%;
	padding: 1rem 0.5rem;
	display: flex;
	justify-content: space-between;
	border-bottom: 1px solid rgb(184, 183, 183);
`;

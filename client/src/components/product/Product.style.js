import styled from 'styled-components';
import { Button } from '@mui/material';
import Card from '@mui/material/Card';
import { Typography } from '@mui/material';

export const ProductCard = styled(Card)`
	padding-bottom: 1.5rem;
	.MuiCardContent-root {
		padding-left: 1rem;
	}
	.MuiCardActions-root {
		margin-top: 1rem;
		padding-left: 1rem;
	}
	.MuiTypography-root {
		line-height: 1;
	}
	.MuiButtonBase-root.MuiButton-root {
		font-weight: 600;
		background: #ce5937;
		background: -moz-linear-gradient(
			-45deg,
			#ce5937 0%,
			#a49826 49%,
			#c59237 100%
		);
		background: -webkit-linear-gradient(
			-45deg,
			#ce5937 0%,
			#a49826 49%,
			#c59237 100%
		);
		background: linear-gradient(135deg, #ce5937 0%, #a49826 49%, #c59237 100%);
		a {
			color: inherit;
			text-decoration: none;
		}
	}
	.MuiCardActions-root > :not(:first-of-type) {
		margin-left: 1rem;
	}
	@media only screen and (max-width) {
		.css-mhc70k-MuiGrid-root > .MuiGrid-item {
			padding-left: 0;
		}
	}
`;

export const ProductName = styled(Typography)``;
export const ProductDetails = styled(Typography)``;

export const ProductButton = styled(Button)``;

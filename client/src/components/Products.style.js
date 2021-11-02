import styled from 'styled-components';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

export const ProductsBox = styled(Box)`
	width: 95%;
	margin: 1rem auto;
	.css-1sra7t5-MuiTypography-root {
		text-shadow: 0px 5px 17px rgba(0, 0, 0, 0.36);
	}
	.css-mhc70k-MuiGrid-root {
		margin: 2rem 0;
	}
	@media only screen and (max-width: 480px) {
		width: 100%;
		.css-1sra7t5-MuiTypography-root {
			font-size: 2.5rem;
		}
		.css-mhc70k-MuiGrid-root > .MuiGrid-item {
			padding-left: 0;
		}
	}
`;

export const Heading = styled(Typography)``;

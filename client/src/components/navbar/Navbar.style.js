import styled from 'styled-components';
import AppBar from '@mui/material/AppBar';
import { Box, Button, Toolbar, Typography } from '@mui/material';

export const MenuBox = styled(Box)`
	width: 100%;
	.MuiPaper-root.MuiAppBar-root {
		background-color: #000000;
	}
`;
export const MenuBar = styled(AppBar)`
	width: 100%;
	color: #000000;
`;

export const MenuToolBar = styled(Toolbar)`
	display: flex;
	justify-content: space-between;
	.MuiTypography-root {
		@media only screen and(max-width: 480px) {
			font-size: 2.5rem;
		}
	}
`;

export const MenuLogo = styled(Typography)`
	color: #ffffff;
`;

export const MenuText = styled(Typography)`
	font-size: 0.9rem;
	line-height: 18.96px;
`;
export const ButtonBox = styled(Box)`
	width: 26%;
	display: flex;
	margin-right: 2rem;
	align-items: center;
	justify-content: space-between;
	a {
		color: white;
		text-decoration: none;
		.MuiButtonBase-root.MuiButton-root.MuiButton-outlinedPrimary {
			color: #ffffff;
			border: 1px solid #ffffff;
			&:hover {
				border: none;
				outline: none;
			}
		}
		.MuiButtonBase-root.MuiButton-root {
			color: #ffffff;
		}
		.MuiButtonBase-root.MuiButton-root.MuiButton-textPrimary {
			color: #ffffff;
			&:hover {
				border: 1px solid #ffffff;
			}
		}
	}
`;
export const NavButton = styled(Button)`
	outline: none;
	border: none;
	border-radius: 4px;
`;

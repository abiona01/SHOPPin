import styled from "styled-components"
import AppBar from "@mui/material/AppBar";
import { Box, Button, Toolbar, Typography } from "@mui/material";

export const MenuBox = styled(Box)`
width: 100%;
.css-hip9hq-MuiPaper-root-MuiAppBar-root{
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
.css-1sra7t5-MuiTypography-root{
    @media onyl screen and(max-width: 480px) {
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
  a{
      color: white;
      text-decoration: none;
      .css-1rwt2y5-MuiButtonBase-root-MuiButton-root{
          color: #ffffff;
          border: 1px solid #ffffff;
          &:hover {
              border: none;
          }
      }
      .css-1e6y48t-MuiButtonBase-root-MuiButton-root{
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

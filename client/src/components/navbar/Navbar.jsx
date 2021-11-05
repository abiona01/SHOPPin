import { useState } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import StoreIcon from '@mui/icons-material/Store';
import MoreIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from "react-router-dom";
import { ButtonBox, MenuBar, MenuBox, MenuLogo, MenuText, MenuToolBar, NavButton } from "./Navbar.style";



export default function PrimarySearchAppBar() {
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const mobileMenuId = "primary-search-account-menu-mobile";
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: "top", horizontal: "right" }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <Link to="/login">
                    <NavButton variant="outlined">Login</NavButton>
                </Link>
            </MenuItem>
            <MenuItem>
                <Link to="/">
                    <NavButton variant="text"> <StoreIcon /> <MenuText>Shop</MenuText></NavButton>
                </Link>
            </MenuItem>
            <MenuItem>
                <Link to="/cart">
                    <NavButton variant="text"> <ShoppingCartIcon /> <MenuText>Cart</MenuText></NavButton>
                </Link>
            </MenuItem>
        </Menu>
    );

    return (
        <MenuBox sx={{ flexGrow: 1 }}>
            <MenuBar position='static'>
                <MenuToolBar>
                    <MenuLogo variant='h2' component="h2">
                        SHOPPin
                    </MenuLogo>
                    <ButtonBox sx={{ display: { xs: "none", md: "flex" } }}>
                        <Link to="/login">
                            <NavButton variant="outlined">Login</NavButton>
                        </Link>
                        <Link to="/">
                            <NavButton variant="text"> <StoreIcon /> <MenuText>Shop</MenuText></NavButton>
                        </Link>
                        <Link to="/cart">
                            <NavButton variant="text"> <ShoppingCartIcon /> <MenuText>Cart</MenuText></NavButton>
                        </Link>
                    </ButtonBox>
                    <Box sx={{ display: { xs: "flex", md: "none" } }}>
                        <IconButton
                            size="large"
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </Box>
                </MenuToolBar>
            </MenuBar>
            {renderMobileMenu}

        </MenuBox>

    );
}

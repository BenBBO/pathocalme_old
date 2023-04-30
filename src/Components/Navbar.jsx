
import React, { useState } from "react";

import { AppBar, Box, Toolbar, Button, IconButton, Divider, Drawer, List, ListItem, ListItemButton, ListItemText } from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

const drawerWidth = 240;
const navItems = ["Animation", "Mediation", "Pedagogie"];

export default function Navbar(props) {


    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const { window } = props;
    const container = window !== undefined ? () => window().document.body : undefined;

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Box sx={{ my: 2 }} >
                <Link to="/">
                    <img src={require("Assets/Images/logo.png")} style={{ height: '8em' }} />
                </Link>
            </Box>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton href={`/${item.toLowerCase()}`} sx={{ textAlign: 'center' }}>
                            <ListItemText primary={item} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );


    return <Box sx={{ flexGrow: 1 }}>
        <AppBar component="nav">
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{ mr: 2, display: { sm: 'none' } }}
                >
                    <MenuIcon />
                </IconButton>
                <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }} >
                    <Link to="/">
                        <img src={require("Assets/Images/logo.png")} style={{ height: '3em' }} />
                    </Link>
                </Box>
                <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                    {navItems.map((item) => (
                        <Button href={`/${item.toLowerCase()}`} key={item} sx={{ color: '#fff' }}>
                            {item}
                        </Button >
                    ))}
                </Box>
            </Toolbar>
        </AppBar>
        <Box component="nav">
            <Drawer
                container={container}
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                    display: { xs: 'block', sm: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
            >
                {drawer}
            </Drawer>
        </Box>
    </Box>

}
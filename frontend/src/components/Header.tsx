import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {AppBar, Box, Button, IconButton, Link, Menu, MenuItem, Toolbar, Typography} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export default function Header() {
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleNavigate = (path: string) => {
        setAnchorEl(null);
        navigate(path);
    }

    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{mr: 2}}
                        onClick={handleClick}
                    >
                        <MenuIcon/>
                    </IconButton>

                    <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                        <MenuItem onClick={() => handleNavigate("/customers")}>
                            Kunden
                        </MenuItem>
                        <MenuItem onClick={() => handleNavigate("/employees")}>
                            Mitarbeiter
                        </MenuItem>
                        <MenuItem onClick={() => handleNavigate("/fleets")}>
                            Fuhrpark
                        </MenuItem>
                    </Menu>

                    <Link href="/" color="inherit" underline="none" flexGrow={1}>
                        <Typography variant="h5" component="div" textAlign="center">
                            Versandplanung
                        </Typography>
                    </Link>

                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
}
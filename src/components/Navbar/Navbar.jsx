import { AppBar, IconButton, Toolbar, Drawer, Button, Avatar } from "@mui/material"
import { Menu, AccountCircle, Brightness4, Brightness7 } from "@mui/icons-material"
import { Link } from "react-router-dom"
import { useMediaQuery } from "@mui/material"
import { useTheme } from "@mui/material/styles"
import useStyles from "./styles"
import { useState } from "react"

import {Sidebar} from '../';

const Navbar = () => {

    const [mobileOpen, setMobileOpen] = useState(false);

    const classes = useStyles();
    const isMobile = useMediaQuery('(max-width: 600px)');
    const theme = useTheme();
    const isAuthenticated = true;

    return (
        <>
            <AppBar position="fixed">
                <Toolbar className={classes.toolbar}>
                    {isMobile && (
                        <IconButton color="inherit" edge="start" style={{ outline: 'none' }} onClick={() => setMobileOpen((prevMobileOpen) => !prevMobileOpen)} className={classes.menuButton}>
                            <Menu />
                        </IconButton>
                    )}
                    <IconButton color="inherit" sx={{ ml: 1 }} onClick={() => { }}>
                        {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
                        {!isMobile && (
                            'Search ...'
                        )}
                        <div>
                            {!isAuthenticated ? (
                                <Button color="inherit">Login &nbsp; <AccountCircle /></Button>
                            ) : (
                                <Button color="inherit" component={Link} to="/profile/:id" className={classes.linkButton} >
                                    {!isMobile && <>MyMovies&nbsp;</>}
                                    <Avatar style={{width: '30px', height: '30px'}} alt="Profile" src="https://i.pravatar.cc/300"/>
                                </Button>
                            )}
                        </div>
                        {isMobile && (
                            'Search ...'
                        )}
                    </IconButton>
                </Toolbar>
            </AppBar>
            <div>
                <nav className={classes.drawer}>
                    {isMobile ? (
                        <Drawer variant="temporary" anchor="right" open={mobileOpen} classes={{ paper: classes.drawerPaper }} ModalProps={{ keepMounted: true }} 
                        onClose={() => setMobileOpen((prevMobileOpen) => !prevMobileOpen)}> 
                            <Sidebar setMobileOpen={setMobileOpen} />
                        </Drawer>
                    ) : (
                        <Drawer classes={{paper: classes.drawerPaper}} variant="permanent" open={true}>
                            <Sidebar setMobileOpen={setMobileOpen} />
                        </Drawer>
                    )}
                </nav>
            </div>
        </>
    )
}

export default Navbar
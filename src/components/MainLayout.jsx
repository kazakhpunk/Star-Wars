import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';;
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Search from './Search';

const Layout = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const location = useLocation();
    const showSearchBar = location.pathname !== '/';

    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" style={{ flexGrow: 1 }}>
                        Star Wars Catalogue
                    </Typography>
                    <Button color="inherit" component={Link} to="/">Home</Button>
                    <Button color="inherit" component={Link} to="/planets">Planets</Button>
                    <Button color="inherit" component={Link} to="/characters">Characters</Button>
                    <Button color="inherit" component={Link} to="/starships">Starships</Button>
                </Toolbar>
            </AppBar>
            {showSearchBar && <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />}
            <Outlet context={{ searchQuery }}/>
        </>
    );
}

export default Layout;
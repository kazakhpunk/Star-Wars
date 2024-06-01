import React from 'react';
import { Container, Typography, Grid, Paper, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <Box sx={{ bgcolor: 'background.default', color: 'text.primary', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Container maxWidth={false} sx={{ flexGrow: 1, py: 5, mt: 5 }}>
                <Box sx={{ textAlign: 'center', mb: 4}}>
                    <Typography variant="h2" gutterBottom>
                        Welcome to the Star Wars Catalogue
                    </Typography>
                    <Typography variant="h5" gutterBottom>
                        Information about planets, characters, and starships from the Star Wars movies.
                    </Typography>
                </Box>
                <Grid container spacing={4} sx={{ flexGrow: 1, mt: 10  }}>
                    <Grid item xs={12} sm={4} sx={{ display: 'flex' }}>
                        <Paper sx={{ p: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', boxShadow: 3, borderRadius: 2, minHeight: '250px', bgcolor: 'background.paper', flexGrow: 1 }}>
                            <Typography variant="h6" gutterBottom>
                                Planets
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                Discover various planets in the Star Wars movies.
                            </Typography>
                            <Box sx={{ mt: 'auto' }}>
                                <Button variant="contained" color="primary" component={Link} to="/planets">
                                    Explore Planets
                                </Button>
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={4} sx={{ display: 'flex' }}>
                        <Paper sx={{ p: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', boxShadow: 3, borderRadius: 2, minHeight: '250px', bgcolor: 'background.paper', flexGrow: 1 }}>
                            <Typography variant="h6" gutterBottom>
                                Characters
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                Learn about the characters from Star Wars movies.
                            </Typography>
                            <Box sx={{ mt: 'auto' }}>
                                <Button variant="contained" color="primary" component={Link} to="/characters">
                                    Explore Characters
                                </Button>
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={4} sx={{ display: 'flex' }}>
                        <Paper sx={{ p: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', boxShadow: 3, borderRadius: 2, minHeight: '250px', bgcolor: 'background.paper', flexGrow: 1 }}>
                            <Typography variant="h6" gutterBottom>
                                Starships
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                Get to know the starships in the Star Wars movies.
                            </Typography>
                            <Box sx={{ mt: 'auto' }}>
                                <Button variant="contained" color="primary" component={Link} to="/starships">
                                    Explore Starships
                                </Button>
                            </Box>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default HomePage;

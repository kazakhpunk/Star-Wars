import React, { useState, useEffect } from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { Container, Typography, Grid, Paper, CircularProgress } from '@mui/material';

function Starships() {
    const [starships, setStarships] = useState([]);
    const [error, setError] = useState(null);
    const { searchQuery } = useOutletContext();

    useEffect(() => {
        const fetchStarships = async () => {
            try {
                const response = await fetch('http://localhost:8000/api/starships');
                const data = await response.json();
                setStarships(data || []); // Ensure data is an array
            } catch (error) {
                setError(error.message);
            }
        }

        fetchStarships();
    }, []);

    const filteredStarships = starships.filter(starship =>
        starship.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (error) return <Typography color="error">{error}</Typography>;

    return (
        <Container maxWidth="lg">
            <Typography variant="h4" gutterBottom sx = {{mb: 4, textAlign: 'center'}}>
                Starships
            </Typography>
            <Grid container spacing={3}>
                {filteredStarships.map((starship) => (
                    <Grid item xs={12} sm={6} md={4} key = {starship.name}>
                        <Paper sx={{ p: 2, height: '100%' }}>
                            <Typography variant="h6">{starship.name}</Typography>
                            <Typography><strong>Model:</strong> {starship.model}</Typography>
                            <Typography><strong>Manufacturer:</strong> {starship.manufacturer}</Typography>
                            <Typography><strong>Cost in Credits:</strong> {starship.cost_in_credits}</Typography>
                            <Link to={`/starships/${starship.url.split('/').slice(-2, -1)[0]}`}>View Details</Link>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default Starships;

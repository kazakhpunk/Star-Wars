import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, CircularProgress, Paper } from '@mui/material';

function StarshipInfo() {
    const { id } = useParams();
    const [starship, setStarship] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchStarship = async () => {
            try {
                const response = await fetch(`http://localhost:8000/api/starships/${id}`);
                if (!response.ok) {
                    throw new Error('Starship not found');
                }
                const data = await response.json();
                setStarship(data);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };

        fetchStarship();
    }, [id]);

    if (loading) return <CircularProgress />;
    if (error) return <Typography color="error">{error}</Typography>;

    return (
        <Container maxWidth="sm">
            {starship && (
                <Paper sx={{ p: 3, mt: 5 }}>
                    <Typography variant="h4">{starship.name}</Typography>
                    <Typography><strong>Model:</strong> {starship.model}</Typography>
                    <Typography><strong>Manufacturer:</strong> {starship.manufacturer}</Typography>
                    <Typography><strong>Cost in Credits:</strong> {starship.cost_in_credits}</Typography>
                    <Typography><strong>Length:</strong> {starship.length}</Typography>
                    <Typography><strong>Max Atmosphering Speed:</strong> {starship.max_atmosphering_speed}</Typography>
                    <Typography><strong>Crew:</strong> {starship.crew}</Typography>
                    <Typography><strong>Passengers:</strong> {starship.passengers}</Typography>
                    <Typography><strong>Cargo Capacity:</strong> {starship.cargo_capacity}</Typography>
                </Paper>
            )}
        </Container>
    );
}

export default StarshipInfo;

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, CircularProgress, Paper } from '@mui/material';

function PlanetInfo() {
    const { id } = useParams();
    const [planet, setPlanet] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPlanet = async () => {
            try {
                const response = await fetch(`http://localhost:8000/api/planets/${id}`);
                const data = await response.json();
                setPlanet(data);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };

        fetchPlanet();
    }, [id]);

    if (loading) return <CircularProgress />;
    if (error) return <Typography color="error">{error}</Typography>;

    return (
        <Container maxWidth="sm">
            {planet && (
                <Paper sx={{ p: 3, mt: 5 }}>
                    <Typography variant="h4">{planet.name}</Typography>
                    <Typography><strong>Climate:</strong> {planet.climate}</Typography>
                    <Typography><strong>Terrain:</strong> {planet.terrain}</Typography>
                    <Typography><strong>Population:</strong> {planet.population}</Typography>
                </Paper>
            )}
        </Container>
    );
}

export default PlanetInfo;

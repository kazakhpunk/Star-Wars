import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, CircularProgress, Paper } from '@mui/material';

function CharacterInfo() {
    const { id } = useParams();
    const [character, setCharacter] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCharacter = async () => {
            try {
                const response = await fetch(`http://localhost:8000/api/characters/${id}`);
                if (!response.ok) {
                    throw new Error('Character not found');
                }
                const data = await response.json();
                setCharacter(data);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };

        fetchCharacter();
    }, [id]);

    if (loading) return <CircularProgress />;
    if (error) return <Typography color="error">{error}</Typography>;

    return (
        <Container maxWidth="sm">
            {character && (
                <Paper sx={{ p: 3, mt: 5 }}>
                    <Typography variant="h4">{character.name}</Typography>
                    <Typography><strong>Height:</strong> {character.height}</Typography>
                    <Typography><strong>Mass:</strong> {character.mass}</Typography>
                    <Typography><strong>Hair Color:</strong> {character.hair_color}</Typography>
                    <Typography><strong>Skin Color:</strong> {character.skin_color}</Typography>
                    <Typography><strong>Eye Color:</strong> {character.eye_color}</Typography>
                    <Typography><strong>Birth Year:</strong> {character.birth_year}</Typography>
                    <Typography><strong>Gender:</strong> {character.gender}</Typography>
                </Paper>
            )}
        </Container>
    );
}

export default CharacterInfo;

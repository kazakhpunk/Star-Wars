import React, { useState, useEffect } from 'react';
import { Container, Typography, Grid, Paper } from '@mui/material';
import { Link, useOutletContext } from 'react-router-dom';

function Characters() {
  const [characters, setCharacters] = useState([]);
  const [error, setError] = useState(null);
  const { searchQuery } = useOutletContext();

  useEffect(() => {
    const fetchCharacters = async () => {
        try {
            const response = await fetch('http://localhost:8000/api/characters');
            const data = await response.json();
            if (Array.isArray(data)) {
                setCharacters(data);
            } else {
                setError('Invalid data format');
            }
        } catch (error) {
            console.error('Failed to fetch planets', error);
            setError('Failed to fetch planets');
        }
    };

        fetchCharacters();
    }, []);

    const filteredCharacters = characters.filter(character =>
      character.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <Container>
          <Typography variant="h4" gutterBottom sx = {{mb: 4, textAlign: 'center'}}>
            Characters
          </Typography>
          <Grid container spacing={4}>
            {filteredCharacters.map(character => (
              <Grid item xs={12} sm={6} md={4} key={character.name}>
                <Paper sx={{ p: 2 }}>
                  <Typography variant="h6">{character.name}</Typography>
                  <Link to={`/characters/${character.url.split('/').slice(-2, -1)[0]}`}>View Details</Link>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      );
    }

    export default Characters;


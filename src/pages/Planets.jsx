import React, { useEffect, useState } from 'react';
import { Container, Typography, Grid, Paper } from '@mui/material';
import { Link, useOutletContext } from 'react-router-dom';

function Planets() {
  const [planets, setPlanets] = useState([]);
  const [error, setError] = useState(null);
  const { searchQuery } = useOutletContext();

  useEffect(() => {
    const fetchPlanets = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/planets');
        const data = await response.json();
        // Ensure that data is an array
        if (Array.isArray(data)) {
          setPlanets(data);
        } else {
          setError('Invalid data format');
        }
      } catch (error) {
        console.error('Failed to fetch planets', error);
        setError('Failed to fetch planets');
      }
    };

    fetchPlanets();
  }, []);

  const filteredPlanets = planets.filter(planet =>
    planet.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <Container>
      <Typography variant="h4" gutterBottom sx={{mb: 4, textAlign: 'center' }}>
        Planets
      </Typography>
      <Grid container spacing={4}>
        {filteredPlanets.map((planet) => (
          <Grid item xs={12} sm={6} md={4} key={planet.name}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="h6">{planet.name}</Typography>
              <Typography>Climate: {planet.climate}</Typography>
              <Typography>Population: {planet.population}</Typography>
              <Link to={`/planets/${planet.url.split('/').slice(-2, -1)[0]}`}>View Details</Link>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Planets;

import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';

const app = express();
const PORT = 8000;

// Use CORS middleware
app.use(cors({
  origin: ['http://localhost:3000','http://localhost:3001'], 
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type'],
}));

app.get('/api/planets', async (req, res) => {
  try {
    const response = await fetch('https://swapi.dev/api/planets/');
    const data = await response.json();
    res.json(data.results);
  } catch (error) {
    console.error('Error fetching planets:', error);
    res.status(500).json({ error: 'Failed to fetch planets' });
  }
});

app.get('/api/planets/:id', async (req, res) => {
    const planetId = req.params.id;
    try {
      const response = await fetch(`https://swapi.dev/api/planets/${planetId}/`);
      if (!response.ok) {
        throw new Error('Planet not found');
      }
      const data = await response.json();
      res.json(data);
    } catch (error) {
      console.error('Error fetching planet:', error);
      res.status(500).json({ error: 'Failed to fetch planet' });
    }
  });
  

app.get('/api/characters', async (req, res) => {
  try {
    const response = await fetch('https://swapi.dev/api/people/');
    const data = await response.json();
    res.json(data.results);
  } catch (error) {
    console.error('Error fetching characters:', error);
    res.status(500).json({ error: 'Failed to fetch characters' });
  }
});

app.get('/api/characters/:id', async (req, res) => {
  const characterId = req.params.id;
  try {
    const response = await fetch(`https://swapi.dev/api/people/${characterId}/`);
    if (!response.ok) {
      throw new Error('Planet not found');
    }
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error fetching character:', error);
    res.status(500).json({ error: 'Failed to fetch character' });
  }
});

app.get('/api/starships', async (req, res) => {
  try {
    const response = await fetch('https://swapi.dev/api/starships/');
    const data = await response.json();
    res.json(data.results);
  } catch (error) {
    console.error('Error fetching starships:', error);
    res.status(500).json({ error: 'Failed to fetch starships' });
  }
});

app.get('/api/starships/:id', async (req, res) => {
  const starshipId = req.params.id;
  try {
    const response = await fetch(`https://swapi.dev/api/starships/${starshipId}/`);
    if (!response.ok) {
      throw new Error('Starship not found');
    }
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error fetching starship:', error);
    res.status(500).json({ error: 'Failed to fetch Starship' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

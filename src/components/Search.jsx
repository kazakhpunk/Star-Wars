import React from 'react';
import { TextField } from '@mui/material';

function Search({ searchQuery, setSearchQuery }) {
  return (
    <TextField 
      label="Search"
      variant="outlined"
      fullWidth
      value={searchQuery}
      placeholder="Search whatever you want"
      onChange={(e) => setSearchQuery(e.target.value)}
      sx={{ mb: 4, backgroundColor: '#64696C', mt: 1}}
    />
  );
}

export default Search;

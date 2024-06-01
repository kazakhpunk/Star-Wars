# Star Wars Catalogue 
Made by Nursultan Sagyntay.

Welcoome to the Star Wars Catalogue, a web application that provides information on planets, characters and starships from Star Wars movies. 

The project consists of Frontend and Backend:

- **Backend**: Made on Node.js and Express.js
- **Frontend**: Made on React and Material UI

## Main Features

- **Planets**: Users can see details about Planets, including climate, terrain, and population. 
- **Characters**: Users can see details about Characters, including height, mass, and more. 
- **Starships**: Users can see details about Starships, including model name, manufacturer, and more. 
- **Search**: Users can search for Planets, Characters and Starships, based Title.
- **Navigation**: Users can navigate between Pages using Navigation Bar on top of the page.
- **API**: Data is used from Star Wars API (https://swapi.dev/api/).

## Installation

- **Clone the Repository**:

```console
git clone git@github.com:kazakhpunk/Star-Wars.git
```

>OR

```console
git clone https://github.com/kazakhpunk/Star-Wars.git
```

- **Backend**:
```console
npm install
node server.js
```

- **Frontend**:
```console
npm install
npm run dev
```
## Common Issue: Port already in use

- **Solution**:
```console
lsof -i :<number_of_port>
kill -9 <PID>
```

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import MainLayout from './components/MainLayout';
import HomePage from './pages/HomePage';
import Planets from './pages/Planets';
import Characters from './pages/Characters';
import Starships from './pages/Starships';
import PlanetInfo from './pages/PlanetInfo';
import StarshipInfo from './pages/StarshipInfo';
import CharacterInfo from './pages/CharacterInfo';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path='/planets' element={<Planets/>} />
        <Route path='/characters' element={<Characters/>} />
        <Route path='/starships' element={<Starships/>}  />
        <Route path="/planets/:id" element={<PlanetInfo />} />
        <Route path="/characters/:id" element={<CharacterInfo />} />
        <Route path="/starships/:id" element={<StarshipInfo />} />
      </Route>
    )
  );

  return (
  <>
    <RouterProvider router={router} />
  </> )}

export default App

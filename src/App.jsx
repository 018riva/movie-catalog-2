import { Routes, Route, Link } from 'react-router-dom';

import { Home } from './pages/Home';
import { Movies } from './pages/Movies';
import { Actors } from './pages/Actors';
import { NotFoundPage } from './pages/NotFound';


function App() {
  return (
    <>
      <header>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
        <Link to="/actors">Actors</Link>
      </header>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/movies' element={<Movies/>}/>
        <Route path='/actors' element={<Actors/>}/>
        <Route path='*' element={<NotFoundPage/>}/>
      </Routes>
    </>
  )
}

export default App

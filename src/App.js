import './css/App.css'
import {BrowserRouter,Route,Routes,Link} from 'react-router-dom'
import HeaderMovies from './components/HeaderMovies'
import Estructure from './components/Estructure'



function App() {
  return <>
   <HeaderMovies/>
    <BrowserRouter>
      <Routes>
        {/* <Route path='' element={'<componente/>'}/> */}
        <Route path='/' element={<Estructure/>}/>
        <Route path='/TestingH1' element={<Link to='/' >Test</Link>}/>
      </Routes>
    </BrowserRouter>
    <footer>

    </footer>
  </>
}

export default App;

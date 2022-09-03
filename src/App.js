// Hooks
import { BrowserRouter as Router, Routes, Route,} from 'react-router-dom'

// Bootstrap
import './App.css';

// Componentes
import { Home } from './pages/Home';


function App() {


return (
    <div className="App">
      <Router>
    
        <Routes>
          <Route path='/' element={<Home/>}>    </Route>
          <Route path='*' element={<h1>ERRO 404: PÁGINA NÃO ENCONTRADA</h1>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

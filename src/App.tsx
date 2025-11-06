import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/home'
import Logged from './components/logged'

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/logged" element={<Logged/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App

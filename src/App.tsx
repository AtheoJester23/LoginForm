import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Logged from './pages/logged'
import ProtectedRoute from './components/ProtectedRoute'

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
              <Home/>
          }/>
        <Route path="/logged" element={
            <ProtectedRoute>
              <Logged/>
            </ProtectedRoute>
          }/>
      </Routes>
    </BrowserRouter>
  )
}

export default App

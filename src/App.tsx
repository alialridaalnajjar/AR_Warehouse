import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import LoadingPage from './pages/LoadingPage'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LoadingPage/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App

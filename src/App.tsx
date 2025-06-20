import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import LoadingPage from './pages/LoadingPage'
import MainPage from './pages/MainPage'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LoadingPage/>}/>
          <Route path="/MainPage" element={<MainPage/>}/>

        </Routes>
      </Router>
    </>
  )
}

export default App

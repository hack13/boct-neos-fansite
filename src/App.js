import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import About from './components/About'
import Credits from './components/Credits'
import Archive from './components/Archive'
import GameSession from './components/GameSession'
import { Route, Routes } from 'react-router-dom'

export default function App() {
  return (
      <div>
        <Header />
        <div class="p-10 align-center bg-stone-400">
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="credits" element={<Credits />} />
            <Route path="archive" element={<Archive />} />
            <Route path="/game/:id" element={<GameSession />} />
          </Routes>
        </div>
        <Footer />
      </div>
  )
}
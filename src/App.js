import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import About from './components/About'
import Credits from './components/Credits'
import Archive from './components/Archive'
import GameSession from './components/GameSession'
import { Route, Routes } from 'react-router-dom'
import { QueryClientProvider, QueryClient } from 'react-query'

const queryClient = new QueryClient()

export default function App() {
  return (
      <div>
        <Header />
        <div className="p-1 md:p-5 lg:p-10 2xl:px-40 align-center bg-stone-400">
        <QueryClientProvider client={queryClient}>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="credits" element={<Credits />} />
            <Route path="archive" element={<Archive />} />
            <Route path="/game/:id" element={<GameSession />} />
          </Routes>
        </QueryClientProvider>
        </div>
        <Footer />
      </div>
  )
}
import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Layout from './components/layout/Layout'
import HeadphonePage from './pages/HeadphonePage'
import SpeakersPage from './pages/SpeakersPage'
import SoundbarPage from './pages/SoundbarPage'
import LuxuryAudioPage from './pages/LuxuryAudioPage'
import ProfessionalAudioPage from './pages/ProfessionalAudioPage'
import CarAudioPage from './pages/CarAudioPage'
import AccessoriesPage from './pages/AccessoriesPage'
import SoundOfCelebrationsPage from './pages/SoundOfCelebrationsPage'
import ClearanceSalePage from './pages/ClearanceSalePage'
import HomePage from './pages/HomePage'
import ProductDetails from './components/ProductDetails/ProductDetails'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path='headphonePage' element={<HeadphonePage />} />
            <Route path='speakers' element={<SpeakersPage />} />
            <Route path='soundbar' element={<SoundbarPage />} />
            <Route path='luxuryAudio' element={<LuxuryAudioPage />} />
            <Route path='professionalAudio' element={<ProfessionalAudioPage />} />
            <Route path='carAudio' element={<CarAudioPage />} />
            <Route path='accessories' element={<AccessoriesPage />} />
            <Route path='soundOfCelebrations' element={<SoundOfCelebrationsPage />} />
            <Route path='clearanceSale' element={<ClearanceSalePage />} />
            <Route path='productDetails' element={ProductDetails} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

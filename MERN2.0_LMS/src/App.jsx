import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import SingleBook from './pages/singleBook/SingleBook'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/book/:id' element={<SingleBook/>} />
      </Routes>
    </BrowserRouter>


  )
}
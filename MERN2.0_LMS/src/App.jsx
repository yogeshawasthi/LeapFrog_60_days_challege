import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import SingleBook from './pages/singleBook/SingleBook'
import AddBook from './pages/addBook/AddBook'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/book/:id' element={<SingleBook/>} />
        <Route path='/addBook' element={<AddBook/>} />
      </Routes>
    </BrowserRouter>


  )
}
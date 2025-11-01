import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import SingleBook from './pages/singleBook/SingleBook'
import AddBook from './pages/addBook/AddBook'
import EditBook from './pages/editBook/EditBook'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/book/:id' element={<SingleBook/>} />
        <Route path='/addBook' element={<AddBook/>} />
        <Route path='/editBook/:id' element={<EditBook/>} />
      </Routes>
    </BrowserRouter>
 

  )
}
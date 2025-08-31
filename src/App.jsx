import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'
import { Navbar } from './components/navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <BrowserRouter>
        
        <Routes>
          <Route index element = {<Home/>}/>
          <Route path= "*" element = {<NotFound/>}/>          
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

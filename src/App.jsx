import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element = {<Home/>}/>
          <Route path = "*" element {<NotFound/>}/>          
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

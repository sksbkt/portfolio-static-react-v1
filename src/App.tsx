import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import NavBar from './component/NavBar'
import Banner from './component/Banner'
import 'bootstrap/dist/css/bootstrap.min.css'
import Skills from './component/Skills'

function App() {
  const [count, setCount] = useState(0)

  return <div className="app">
    <NavBar />
    <Banner />
    <Skills />
  </div>

}

export default App

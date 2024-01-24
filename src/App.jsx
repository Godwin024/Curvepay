import './App.css'
import Homescreen from './Components/Homescreen/Homescreen'
import Login from './Components/Login/Login'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Register from './Components/Registerpage/Register'

function App() {

  return (
    <HashRouter>
       <Routes>
      
     <Route path='/' element = {<Login/>}/>
     < Route path='/Homescreen' element = {<Homescreen/>}/>
     < Route path='/Register' element = {<Register/>}/>

      

        
        
        
        </Routes>
      
      
      
      </HashRouter>
  
  

  )
}

export default App

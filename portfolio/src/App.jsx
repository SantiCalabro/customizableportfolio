import NavBar from './components/NavBar'
import Home from "./containers/Home"
import EditProfile from './containers/EditProfile';
import { BrowserRouter, Routes, Route } from "react-router-dom";
  function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={ <Home/>}/>
          <Route path="/profile" element={ <EditProfile/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

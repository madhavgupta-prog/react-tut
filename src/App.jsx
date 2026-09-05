import { Routes,Route } from "react-router-dom"
import CollectionPage from "./pages/CollectionPage"
import HomePage from "./pages/HomePage"
import Navbar from "./components/Navbar"
import {ToastContainer} from "react-toastify"
const App = () => {

  return (
    <div>
      <Navbar />  
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/collection" element={<CollectionPage />} />
      </Routes>
      <ToastContainer />
    </div>
  )
}

export default App
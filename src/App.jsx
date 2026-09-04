import { Routes,Route } from "react-router-dom"
import CollectionPage from "./pages/CollectionPage"
import HomePage from "./pages/HomePage"
import Navbar from "./components/Navbar"
const App = () => {

  return (
    <div>
      <Navbar />  
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/collection" element={<CollectionPage />} />
      </Routes>
    </div>
  )
}

export default App
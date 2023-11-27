import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import RoomPage from "./pages/RoomPage"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/room/:roomName" element={<RoomPage />} />
      </Routes>
    </>
  )
}

export default App

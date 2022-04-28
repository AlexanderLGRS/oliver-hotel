import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Pages/Home';
import Layout from './Components/Layout';
import MainForm from './Components/RoomForm';
import RoomManager from './Pages/RoomManager';

export default function App() {
  return (
    <div className="App">
      <Layout>
        <BrowserRouter>
          <Routes>
          <Route path="/OliversHotel" element={<Home />} />
          <Route path="/OliversHotel/roomManager" element={<RoomManager/>} />
          </Routes>
        </BrowserRouter>
      </Layout>
    </div>
  );
}

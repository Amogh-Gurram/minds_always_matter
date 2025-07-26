import { Routes, Route } from 'react-router-dom';
import Header from './components/header.jsx';
import Purpose from './Purpose/Purpose.jsx';
import AboutUs from './About_Us/About_Us';
import Events_Page from './Events_Page/Events_Page.jsx';
import Donate from './Donate/Donate.jsx';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Purpose />} />
        <Route path="/purpose" element={<Purpose />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/events" element={<Events_Page />} />
        <Route path="/donate" element={<Donate />} />
      </Routes>
    </div>
  );
}

export default App;

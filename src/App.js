import { useState } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/navbar/Navbar';
import Home from './pages/Home';
import Video from './pages/Video';

function App() {
    const { search } = useSelector((state) => state.filter);
    const [input, setInput] = useState(search);
    return (
        <Router>
            <Navbar input={input} setInput={setInput} />
            <Routes>
                <Route path="/" element={<Home setInput={setInput} />} />
                <Route path="/videos/:videoId" element={<Video />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;

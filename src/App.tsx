import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home.tsx';
import WorkExperience from './pages/work-experience.tsx';
import Gallery from './pages/Gallery.tsx';


function App() {
  return (
    <BrowserRouter basename = "/WynnMusselman.github.io">
      <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "/work-experience" element = {<WorkExperience />} />
        <Route path = "/gallery" element = {<Gallery />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
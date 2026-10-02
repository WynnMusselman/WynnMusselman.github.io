import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home.tsx';
import CampusInvolvement from './pages/campus-involvement.tsx';
import WorkExperience from './pages/work-experience.tsx';
import Projects from './pages/projects.tsx'
import Gallery from './pages/gallery.tsx';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "/campus-involvement" element = {<CampusInvolvement />} />
        <Route path = "/work-experience" element = {<WorkExperience />} />
        <Route path = "/gallery" element = {<Gallery />} />
        <Route path = "/projects" element = {<Projects />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
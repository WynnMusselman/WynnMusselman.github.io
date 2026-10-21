import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/mains/home.tsx';
import CampusInvolvement from './components/mains/campus-involvement.tsx';
import WorkExperience from './components/mains/work-experience.tsx';
import Projects from './components/mains/projects.tsx'
import Gallery from './components/mains/gallery.tsx';


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
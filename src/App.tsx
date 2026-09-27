import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home.tsx';
import WorkExperience from './pages/work-experience.tsx';

function App() {
  return (
    <BrowserRouter basename = "/WynnMusselman.github.io">
      <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "/work-experience" element = {<WorkExperience />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
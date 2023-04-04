import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import ToolSpinner from './components/ToolSpinner/ToolSpinner';
import Landing from './pages/landing/Landing';
import Projects from './pages/projects/Projects';
import Social from './pages/Social/Social';

const App = () => (

  <Routes>
    <Route
      path="/"
      element={(
        <>
          <Header />
          <Landing />
          <Projects />
          <Social />
        </>
      )}
    />
    <Route path="/test" element={<ToolSpinner />} />
  </Routes>
);

export default App;

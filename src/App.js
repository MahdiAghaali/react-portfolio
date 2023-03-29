import { Route, Routes } from 'react-router-dom';
import './App.css';
import Landing from './pages/landing/Landing';

const App = () => (
  <Routes>
    <Route path="/" element={<Landing />} />
  </Routes>
);

export default App;

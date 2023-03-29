import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Landing from './pages/landing/Landing';

const App = () => (
  <>
    <Header />
    <Routes>
      <Route path="/" element={<Landing />} />
    </Routes>
  </>
);

export default App;


import './App.css'

import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';

function App() {
  
  
  return (
    <div className='App'>
      <Routes>
        {/* Route for the root path "/" */}
        <Route path="/" element={<Home />} />
        
        {/* Route for the "/profile" path */}
        <Route path="/profile" element={<Profile />} />

        {/* Route for any path that doesn't match the above */}
        <Route path="*" element={<NotFound />} />
      </Routes>

    </div>
  )
}

export default App

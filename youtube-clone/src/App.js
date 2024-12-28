import React from 'react';
import "./App.css"
import Header from './Header';
import Sidebar from './Sidebar';
import RecommandedVideos from './RecommandedVideos';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import SearchPage from './SearchPage';


function App() {
  return (
    <div className='app'>
    <Router>
    <Header />
      <Routes>
      <Route path="/" element={<div><div className='app__page'><Sidebar /><RecommandedVideos /></div></div>} />
      <Route path="/search/:searchTerm" element={<div className='app__page'><Sidebar /><SearchPage /></div>} />
      </Routes>
    </Router>
     </div>

  );
}

export default App;

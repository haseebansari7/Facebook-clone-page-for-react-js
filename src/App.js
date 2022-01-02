import React from 'react';
import { Routes, Route } from "react-router";
// import Profile from './pages/profile/Profile';
import Timeline from './pages/timeline/Timeline';
import Home from './pages/home/Home';

function App() {
  return (
    <>
      {/* <Timeline /> */}
      {/* <Profile /> */}


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/timeline" element={<Timeline />} />
      </Routes>

    </>
  );
}

export default App;


import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Videos from './pages/Videos';
import VideoDetail from './pages/VideoDetail';
import NotFound from './pages/NotFound';

function App() {
  return (
    <React.Fragment>
      {/* <header>
        <div></div>
        <form action="submit">
          <input type="text" />
          <button>클릭</button>
        </form>
      </header> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Videos />} />
          <Route path="/videos/*" element={<Videos />} />
          <Route path="/watch/:videoId" element={<VideoDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;

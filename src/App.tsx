import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Videos from './pages/Videos';
import VideoDetail from './pages/VideoDetail';
import NotFound from './pages/NotFound';
import SearchHeader from './components/SearchHeader';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <SearchHeader />
        <Routes>
          <Route path="/" element={<Videos />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/videos/:keyword" element={<Videos />} />
          <Route path="/watch/:videoId" element={<VideoDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;

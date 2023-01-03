import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Videos from './pages/Videos';
import VideoDetail from './pages/VideoDetail';
import NotFound from './pages/NotFound';
import SearchHeader from './components/SearchHeader';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Loading from './components/Loading';

const queryClient = new QueryClient();

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <SearchHeader />
        <QueryClientProvider client={queryClient}>
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={<Videos />} />
              <Route path="/videos" element={<Videos />} />
              <Route path="/videos/:keyword" element={<Videos />} />
              <Route path="/videos/watch/:videoId" element={<VideoDetail />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;

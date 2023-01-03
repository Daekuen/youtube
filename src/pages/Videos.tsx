import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { popularAxios, searchAxios, searchFake } from '../api/youtube';
import VideoCard from '../components/VideoCard';
import { Video } from '../interfaces/Video.interface';

export default function Videos() {
  const { keyword } = useParams();

  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(
    ['videos', keyword],
    () => searchFake(keyword),
    // () => {
    //   if (keyword) {
    //     return searchAxios(keyword);
    //   } else {
    //     return popularAxios();
    //   }
    // },
    {
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 5,
    }
  );

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>Something is wrong ... 💩</p>}
      {videos && (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-x-2 gap-y-4">
          {videos.map((video: Video) => (
            <VideoCard key={video.etag} video={video} />
          ))}
        </ul>
      )}
    </>
  );
}

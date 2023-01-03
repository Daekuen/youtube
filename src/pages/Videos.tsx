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
      <div>Vidoes {keyword ? keyword : '🔥'}</div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Something is wrong ... 💩</p>}
      {videos && (
        <ul>
          {videos.map((video: Video) => (
            <VideoCard key={video.etag} video={video} />
          ))}
        </ul>
      )}
    </>
  );
}

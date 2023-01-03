import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import VideoCard from '../components/VideoCard';
import { Vedio } from '../interfaces/Vedio.interface';

export default function Videos() {
  const { keyword } = useParams();

  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(
    ['videos', keyword],
    async () => {
      const res = await axios.get(
        `/videos/${keyword ? 'search' : 'popular'}.json`
      );
      return res.data.items;
    },
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
          {videos.map((vedio: Vedio) => (
            <VideoCard key={vedio.etag} vedio={vedio} />
          ))}
        </ul>
      )}
    </>
  );
}

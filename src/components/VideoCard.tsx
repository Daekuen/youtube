import { Video } from '../interfaces/Video.interface';
import { formatAgo } from '../utils/date';
import { useNavigate } from 'react-router-dom';

export default function VideoCard({ video }: { video: Video }) {
  const navigate = useNavigate();
  const { title, channelTitle, thumbnails, publishedAt } = video.snippet;

  return (
    <li
      className="mb-2 mx-2 cursor-pointer hover:scale-110 hover:ease-in duration-300"
      onClick={() => {
        navigate(`/videos/watch/${video.id}`, { state: { video } });
      }}
    >
      <img className="w-full" src={thumbnails.medium.url} alt={title} />
      <div>
        <p className="font-semibold my-2 line-clamp-2">{title}</p>
        <p className="text-sm opacity-80">{channelTitle}</p>
        <p className="text-sm opacity-80">{formatAgo(publishedAt)}</p>
      </div>
    </li>
  );
}

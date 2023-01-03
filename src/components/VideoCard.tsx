import { Video } from '../interfaces/Video.interface';
import { formatAgo } from '../utils/date';

export default function VideoCard({ video }: { video: Video }) {
  const { title, channelTitle, thumbnails, publishedAt } = video.snippet;

  console.log(thumbnails);
  return (
    <li className="mb-2 mx-2">
      <img className="w-full" src={thumbnails.medium.url} alt={title} />
      <div>
        <p className="font-semibold my-2 line-clamp-2">{title}</p>
        <p className="text-sm opacity-80">{channelTitle}</p>
        <p className="text-sm opacity-80">{formatAgo(publishedAt)}</p>
      </div>
    </li>
  );
}

import React from 'react';
import { VideoType } from '../interfaces/Video.interface';
import { formatAgo } from '../utils/date';
import { useNavigate } from 'react-router-dom';

export default function RelatedVideoCard({ video }: { video: VideoType }) {
  const navigate = useNavigate();
  const { thumbnails, title, channelTitle, publishedAt } = video.snippet;
  return (
    <li
      className="flex gap-1 mb-2 items-start cursor-pointer hover:scale-105 hover:ease-in duration-300"
      onClick={() =>
        navigate(`/videos/watch/${video.id}`, { state: { video } })
      }
    >
      <img src={thumbnails.medium.url} alt={title} className="w-60 mr-2" />
      <div>
        <p className="font-semibold text-sm line-clamp-2">{title}</p>
        <p className="text-xs opacity-80">{channelTitle}</p>
        <p className="text-xs opacity-80">{formatAgo(publishedAt)}</p>
      </div>
    </li>
  );
}

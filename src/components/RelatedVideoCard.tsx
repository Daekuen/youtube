import React from 'react';
import { VideoType } from '../interfaces/Video.interface';
import { formatAgo } from '../utils/date';
import { useNavigate } from 'react-router-dom';

export default function RelatedVideoCard({ video }: { video: VideoType }) {
  const navigate = useNavigate();
  const { thumbnails, title, channelTitle, publishedAt } = video.snippet;
  return (
    <li
      className="flex items-center mt-2 cursor-pointer hover:scale-110 hover:ease-in duration-300"
      onClick={() =>
        navigate(`/videos/watch/${video.id}`, { state: { video } })
      }
    >
      <img
        src={thumbnails.default.url}
        alt={title}
        className="object-contain"
      />
      <div className="ml-2">
        <p className="font-semibold text-sm line-clamp-2">{title}</p>
        <p className="text-xs opacity-80">{channelTitle}</p>
        <p className="text-xs opacity-80">{formatAgo(publishedAt)}</p>
      </div>
    </li>
  );
}

import React from 'react';
import { Video } from '../interfaces/Video.interface';

export default function VideoCard({ video }: { video: Video }) {
  return <div>{video.snippet.title}</div>;
}

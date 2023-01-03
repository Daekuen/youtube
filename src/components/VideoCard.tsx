import React from 'react';
import { Vedio } from '../interfaces/Vedio.interface';

export default function VideoCard({ vedio }: { vedio: Vedio }) {
  return <div>{vedio.snippet.title}</div>;
}

import React from 'react';
import RelatedVideoCard from './RelatedVideoCard';

export default function RelatedVideos({ id }: { id: string }) {
  return (
    <ul>
      <RelatedVideoCard />
    </ul>
  );
}

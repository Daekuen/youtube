import React from 'react';
import RelatedVideoCard from './RelatedVideoCard';
import { useQuery } from '@tanstack/react-query';
import { relatedFake } from '../api/youtube';
import { VideoType } from '../interfaces/Video.interface';

export default function RelatedVideos({ id }: { id: string }) {
  const {
    isLoading,
    error,
    data: related,
  } = useQuery(['related', `${id}`], () => relatedFake(id), {
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 5,
  });

  return (
    <>
      {isLoading && <p>dadf</p>}
      {error && <p>Something is wrong ... 💩</p>}
      {related && (
        <ul>
          {related.map((item: VideoType) => {
            return <RelatedVideoCard key={item.id} video={item} />;
          })}
        </ul>
      )}
    </>
  );
}

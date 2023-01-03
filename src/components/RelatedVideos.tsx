import React, { Suspense } from 'react';
import RelatedVideoCard from './RelatedVideoCard';
import { useQuery } from '@tanstack/react-query';
import { relatedAxios, relatedFake } from '../api/youtube';
import { VideoType } from '../interfaces/Video.interface';
import Loading from './Loading';

export default function RelatedVideos({ id }: { id: string }) {
  const { error, data: related } = useQuery(
    ['related', `${id}`],
    // () => relatedFake(id),
    () => relatedAxios(id),
    {
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 5,
    }
  );

  return (
    <>
      {error && <p>Something is wrong ... 💩</p>}
      {related && (
        <Suspense fallback={<Loading />}>
          <ul>
            {related.map((item: VideoType) => {
              return <RelatedVideoCard key={item.id} video={item} />;
            })}
          </ul>
        </Suspense>
      )}
    </>
  );
}

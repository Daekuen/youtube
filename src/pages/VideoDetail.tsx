import React from 'react';
import { useLocation } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { channelFake } from '../api/youtube';
import ChannelInfo from '../components/ChannelInfo';
import RelatedVideos from '../components/RelatedVideos';

export default function VideoDetail() {
  const { video } = useLocation().state;
  const { title, channelId, channelTitle, description } = video.snippet;

  const {
    isLoading,
    error,
    data: chlInfo,
  } = useQuery(['channelInfo', `${title.id}`], () => channelFake(title.id), {
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 60,
  });

  return (
    <>
      {isLoading && <p>Loading....</p>}
      {error && <p>Something is wrong ... 💩</p>}
      {chlInfo && (
        <section className="w-full flex px-4 py-2">
          <article className="w-3/4">
            <iframe
              id="player"
              typeof="text/html"
              width="100%"
              height="640"
              src={`http://www.youtube.com/embed/${video.id}`}
            />
            <div>
              <h2>{title}</h2>
              <ChannelInfo id={channelId} name={channelTitle} />
              <pre>{description}</pre>
            </div>
          </article>
          <section className="w-1/4">
            <RelatedVideos id={video.id} />
          </section>
        </section>
      )}
    </>
  );
}

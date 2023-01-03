import React from 'react';
import { useLocation } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { channelFake } from '../api/youtube';
import ChannelInfo from '../components/ChannelInfo';
import RelatedVideos from '../components/RelatedVideos';

export default function VideoDetail() {
  const { video } = useLocation().state;
  const { title, channelId, channelTitle, description } = video.snippet;

  return (
    <>
      <section className="flex flex-col lg:flex-row px-4 py-2">
        <article className="basis-4/6 mr-4">
          <iframe
            id="player"
            typeof="text/html"
            width="100%"
            height="640"
            src={`http://www.youtube.com/embed/${video.id}`}
          />
          <div className="p-8">
            <h2 className="text-2xl font-bold mt-4 mb-8">{title}</h2>
            <ChannelInfo id={channelId} name={channelTitle} />
            <pre className="mt-8 whitespace-pre-wrap">{description}</pre>
          </div>
        </article>
        <section className="basis-2/6">
          <RelatedVideos id={video.id} />
        </section>
      </section>
    </>
  );
}

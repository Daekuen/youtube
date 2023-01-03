import React, { Suspense } from 'react';
import { useQuery } from '@tanstack/react-query';
import { channelAxios, channelFake } from '../api/youtube';
import Loading from './Loading';

interface ChannelInfoProps {
  id: string;
  name: string;
}

export default function ChannelInfo({ id, name }: ChannelInfoProps) {
  const { error, data: chInfo } = useQuery(
    ['channelInfo', `${id}`],
    () => channelAxios(id),
    {
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 60,
      suspense: true,
    }
  );

  const { thumbnails } = chInfo.snippet;

  return (
    <>
      {error && <p>Something is wrong ... 💩</p>}
      {chInfo && (
        <Suspense fallback={<Loading />}>
          <div className="flex items-center">
            <img
              className="rounded-full w-10 h-10 mr-4"
              src={thumbnails.default.url}
              alt={name}
            />
            <p className="text-lg font-semibold">{name}</p>
          </div>
        </Suspense>
      )}
    </>
  );
}

import axios from 'axios';
import { Video } from '../interfaces/Video.interface';
import { API } from './customAxios';

// * json 통신
export async function searchFake(keyword: string | undefined) {
  const res = await axios.get(`/videos/${keyword ? 'search' : 'popular'}.json`);

  if (keyword) {
    const result = res.data.items.map((item: Video) => ({
      ...item,
      id: item.id.videoId,
    }));
    return result;
  }

  return res.data.items;
}

// * keyword 검색 목록
export async function searchAxios(keyword: string | undefined) {
  const res = await API.get(`search`, {
    params: {
      part: 'snippet',
      maxResults: 25,
      type: 'video',
      q: keyword,
    },
  });
  const result = res.data.items.map((item: Video) => ({
    ...item,
    id: item.id.videoId,
  }));
  return result;
}

// * popular 목록
export async function popularAxios() {
  const res = await API.get(`videos`, {
    params: {
      part: 'snippet',
      chart: 'mostPopular',
      maxResults: 25,
    },
  });
  return res.data.items;
}

// * related 목록
export async function relatedAxios(id: string) {
  const res = await API.get(`search`, {
    params: {
      part: 'snippet',
      relatedToVideoId: id,
      type: 'video',
      maxResults: 25,
    },
  });

  const result = res.data.items.map((item: Video) => ({
    ...item,
    id: item.id.videoId,
  }));
  return result;
}

// * channel 정보
export async function channelAxios(id: string) {
  const res = await API.get(`channels`, {
    params: {
      part: 'snippet',
      id,
    },
  });
  // console.log(res);
  return res.data.items[0];
}

// * related.json
export async function relatedFake(id: string) {
  const res = await axios.get(`/videos/related.json`);

  const result = res.data.items.map((item: Video) => ({
    ...item,
    id: item.id.videoId,
  }));
  return result;
}

// * channel.json
export async function channelFake(id: string) {
  const res = await axios.get(`/videos/channel.json`);
  return res.data.items[0];
}

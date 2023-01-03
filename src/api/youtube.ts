import axios from 'axios';
import { API } from './customAxios';

export async function searchFake(keyword: string | undefined) {
  const res = await axios.get(`/videos/${keyword ? 'search' : 'popular'}.json`);
  return res.data.items;
}

export async function searchAxios(keyword: string | undefined) {
  const res = await API.get(`search`, {
    params: {
      part: 'snippet',
      maxResults: 25,
      type: 'video',
      q: keyword,
    },
  });
  return res.data.items;
}

export async function popularAxios() {
  const res = await API.get(`videos`, {
    params: {
      part: 'snippet',
      chart: 'mostPopular',
      maxResults: 25,
      type: 'video',
    },
  });
  return res.data.items;
}

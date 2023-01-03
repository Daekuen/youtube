import axios from 'axios';
import { API } from './customAxios';

// * json 통신
export async function searchFake(keyword: string | undefined) {
  const res = await axios.get(`/videos/${keyword ? 'search' : 'popular'}.json`);
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
  return res.data.items;
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

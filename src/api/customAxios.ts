import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

const axiosConfig: AxiosRequestConfig = {
  baseURL: 'https://youtube.googleapis.com/youtube/v3',
  headers: {
    'Content-Type': 'application/json',
  },
  params: { key: process.env.REACT_APP_YOUTUBE_API_KEY },
};

export const API: AxiosInstance = axios.create(axiosConfig);

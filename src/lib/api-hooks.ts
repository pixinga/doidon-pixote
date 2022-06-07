
import axios from 'axios';
import { useState } from 'react';
import { FetchState, PostData } from '../types';

export function useGetPosts() {
  const [fetchState, setFetchState] = useState(FetchState.DEFAULT);
  const [posts, setPosts] = useState<Array<PostData>>([]);
  const getPosts = async () => {
    try {
      setFetchState(FetchState.LOADING);

      const res = await axios.get('https://drive.google.com/file/d/1XPxuhaJJM10g5WD3fOh2x3bD0ULlGdlP/view?usp=sharing');
      const resData = res.data as Array<PostData>;

      setPosts(resData);
      setFetchState(FetchState.SUCCESS);
    } catch (err) {
      setFetchState(FetchState.ERROR);
    }
  };

  return [posts, fetchState, getPosts] as const;
}
import { Post } from '@/models/Post';
import { postList } from '@/models/mock/post';
import { useMemo, useState } from 'react';

export const useFetchPosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useMemo(() => {
    setPosts(() => postList);
  }, []);

  return posts;
};

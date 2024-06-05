import { Post } from '@/models/Post';
import { postList } from '@/models/mock/post';
import { useEffect, useState } from 'react';

export const useFetchPosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    setPosts(() => [...postList]);
  }, []);

  return posts;
};

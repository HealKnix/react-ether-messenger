import { useMemo, useState } from 'react';

import { postList } from '@/models/mock/post';
import { Post } from '@/models/Post';

export const useFetchPosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useMemo(() => {
    setPosts(() => postList);
  }, []);

  return posts;
};

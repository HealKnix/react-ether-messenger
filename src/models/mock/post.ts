import Post1 from '@/assets/images/posts/post1.png';
import Post2 from '@/assets/images/posts/post2.png';
import { Post } from '@/models/Post';

import { userList } from './user';

export const postList: Post[] = [
  {
    id: 0,
    text: 'Смотрите какие красивые цветочки!!',
    images: [Post1],
    likeCount: 21,
    commentCount: 4,
    created_by: userList[1],
    created_at: new Date('2024-05-28T21:35:35'),
    updated_at: null,
  },
  {
    id: 1,
    text: 'Основной текст для сообщения. Поскольку это социальное приложение, иногда это горячий дубль, а иногда - вопрос.',
    likeCount: 6,
    commentCount: 18,
    created_by: userList[2],
    created_at: new Date('2024-05-28T18:29:17'),
    updated_at: null,
  },
  {
    id: 2,
    text: 'Фотография из моего последнего похода ✌️',
    images: [Post2],
    likeCount: 58,
    commentCount: 5,
    created_by: userList[3],
    created_at: new Date('2024-05-28T16:58:37'),
    updated_at: null,
  },
  {
    id: 3,
    text: 'Основной текст для сообщения. Поскольку это социальное приложение, иногда это наблюдение, а иногда - поиск рекомендаций.',
    likeCount: 4,
    commentCount: 32,
    created_by: userList[4],
    created_at: new Date('2024-05-28T12:08:12'),
    updated_at: null,
  },
  {
    id: 4,
    text: 'Основной текст для сообщения. Так как это социальное приложение, иногда это обмен советами, а иногда - халява.',
    likeCount: 85,
    commentCount: 44,
    created_by: userList[5],
    created_at: new Date('2024-05-27T23:47:41'),
    updated_at: null,
  },
];

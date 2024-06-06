import './HomePosts.scss';

import { FC } from 'react';

import AvatarText from '@/components/AvatarText/AvatarText';
import Button from '@/components/Button/Button';
import CommentSVG from '@/components/SVG/CommentSVG';
import LikeSVG from '@/components/SVG/LikeSVG';
import { useFetchPosts } from '@/hooks/api/useFetchPosts';
import { getPastTimeString } from '@/utils/getPastTimeString';

const HomePosts: FC = () => {
  const posts = useFetchPosts();

  return (
    <>
      <div className="posts__wrapper">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <AvatarText
              img={post.created_by.avatar}
              name={post.created_by.firstName + ' ' + post.created_by.lastName}
              description={getPastTimeString(post.created_at)}
            />
            {post.images ? (
              post.images?.map((image) => (
                <img
                  src={image}
                  alt="post"
                  className="post-image"
                  key={Math.random()}
                />
              ))
            ) : (
              <></>
            )}
            <span className="post-description">{post.text}</span>
            <div className="post-functional">
              <Button
                className="post-functional-like"
                color="white"
                onClick={(e) => {
                  const likeBtn = e.target as HTMLButtonElement;
                  likeBtn.classList.toggle('active');

                  if (likeBtn.classList.contains('active')) {
                    likeBtn.children[1].textContent = `${parseInt(likeBtn.children[1].textContent ?? '') + 1}`;
                  } else {
                    likeBtn.children[1].textContent = `${parseInt(likeBtn.children[1].textContent ?? '') - 1}`;
                  }
                }}
              >
                <LikeSVG />
                <span className="like-count">{post.likeCount}</span>
              </Button>
              <Button className="post-functional-comment active" color="white">
                <CommentSVG />
                <span className="comment-count">{post.commentCount}</span>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default HomePosts;

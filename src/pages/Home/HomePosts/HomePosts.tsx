import AvatarText from '../../../components/AvatarText/AvatarText';

import LikeSVG from '../../../components/SVG/LikeSVG';
import CommentSVG from '../../../components/SVG/CommentSVG';
import { FC } from 'react';

import './HomePosts.scss';
import { postList } from '../../../models/mock/post';
import { getPastTimeString } from '../../../utils/getPastTimeString';

const HomePosts: FC = () => {
  return (
    <>
      <div className="posts__wrapper">
        {postList.map((post) => (
          <div className="post" key={post.id}>
            <AvatarText
              img={post.createdBy.avatar}
              name={post.createdBy.firstName + ' ' + post.createdBy.lastName}
              description={getPastTimeString(post.dateCreated)}
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
              <div className="post-functional-like active">
                <LikeSVG />
                <span className="like-count">{post.likeCount}</span>
              </div>
              <div className="post-functional-comment active">
                <CommentSVG />
                <span className="comment-count">{post.commentCount}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default HomePosts;

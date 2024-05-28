import { FC } from "react";
import HomeNavigation from "./HomeNavigation/HomeNavigation";
import HomeAsideContent from "./HomeAsideContent/HomeAsideContent";
import AvatarText from "../../components/AvatarText/AvatarText";

import UserAvatar1 from "../../assets/images/avatars/users/user1.png";
import UserAvatar2 from "../../assets/images/avatars/users/user2.png";
import UserAvatar3 from "../../assets/images/avatars/users/user3.png";
import UserAvatar4 from "../../assets/images/avatars/users/user4.png";
import UserAvatar5 from "../../assets/images/avatars/users/user5.png";

import Post1 from "../../assets/images/posts/post1.png";
import Post2 from "../../assets/images/posts/post2.png";

import "./Home.css";
import LikeSVG from "../../components/SVG/LikeSVG";
import CommentSVG from "../../components/SVG/CommentSVG";

const Home: FC = () => {
  return (
    <>
      <div className="home__wrapper">
        <HomeNavigation />
        <div className="home-content__wrapper">
          <div className="posts__wrapper">
            <div className="post">
              <AvatarText
                img={UserAvatar1}
                name="Helena"
                description="3 мин. назад"
              />
              <img src={Post1} alt="post" className="post-image" />
              <span className="post-description">
                Смотрите какие красивые цветочки!!
              </span>
              <div className="post-functional">
                <div className="post-functional-like active">
                  <LikeSVG />
                  <span className="like-count">21</span>
                </div>
                <div className="post-functional-comment active">
                  <CommentSVG />
                  <span className="comment-count">4</span>
                </div>
              </div>
            </div>

            <div className="post">
              <AvatarText
                img={UserAvatar2}
                name="Charles "
                description="2 ч. назад"
              />
              <span className="post-description">
                Основной текст для сообщения. Поскольку это социальное
                приложение, иногда это горячий дубль, а иногда - вопрос.
              </span>
              <div className="post-functional">
                <div className="post-functional-like">
                  <LikeSVG />
                  <span className="like-count">6</span>
                </div>
                <div className="post-functional-comment">
                  <CommentSVG />
                  <span className="comment-count">18</span>
                </div>
              </div>
            </div>

            <div className="post">
              <AvatarText
                img={UserAvatar3}
                name="Oscar "
                description="1 д. назад "
              />
              <img src={Post2} alt="post" className="post-image" />
              <span className="post-description">
                Фотография из моего последнего похода ✌️
              </span>
              <div className="post-functional">
                <div className="post-functional-like active">
                  <LikeSVG />
                  <span className="like-count">58</span>
                </div>
                <div className="post-functional-comment active">
                  <CommentSVG />
                  <span className="comment-count">5</span>
                </div>
              </div>
            </div>

            <div className="post">
              <AvatarText
                img={UserAvatar4}
                name="Daniel Jay Park "
                description="3 ч. назад"
              />
              <span className="post-description">
                Основной текст для сообщения. Поскольку это социальное
                приложение, иногда это наблюдение, а иногда - поиск
                рекомендаций.
              </span>
              <div className="post-functional">
                <div className="post-functional-like">
                  <LikeSVG />
                  <span className="like-count">4</span>
                </div>
                <div className="post-functional-comment">
                  <CommentSVG />
                  <span className="comment-count">32</span>
                </div>
              </div>
            </div>

            <div className="post">
              <AvatarText
                img={UserAvatar5}
                name="Mark Rojas "
                description="6 ч. назад"
              />
              <span className="post-description">
                Основной текст для сообщения. Так как это социальное приложение,
                иногда это обмен советами, а иногда - халява.
              </span>
              <div className="post-functional">
                <div className="post-functional-like">
                  <LikeSVG />
                  <span className="like-count">85</span>
                </div>
                <div className="post-functional-comment">
                  <CommentSVG />
                  <span className="comment-count">44</span>
                </div>
              </div>
            </div>
          </div>
          <HomeAsideContent />
        </div>
      </div>
    </>
  );
};

export default Home;

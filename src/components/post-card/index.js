import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

export type Props = {
  title: string,
  content: string,
  index: number,
};

const PostCard = (props: Props) => {
  const { title, body, index, id } = props;

  return (
    <div className="PostCard">
      {/*<img*/}
      {/*  src={`https://picsum.photos/500/400?random=${index}`}*/}
      {/*  alt=""*/}
      {/*  className="thumbnail"*/}
      {/*/>*/}
      <div
        style={{
          backgroundImage: `url(https://picsum.photos/500/300?random=${index}`,
        }}
        className="thumbnail"
      />
      <div className="content-container">
        <div>
          <h2>{title}</h2>
          <p className="content">{body}</p>
        </div>
        <button type="button" className="reading-button">
          <Link to={`/posts/${id}`} className="button-text">
            Reading
          </Link>
        </button>
      </div>
    </div>
  );
};

export default PostCard;

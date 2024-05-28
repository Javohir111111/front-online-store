import React from "react";
import { Link } from "react-router-dom";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import "./style.scss";
import { CardPropType } from "@interface";

const Index = ({ data }: { data: any }) => {
  const {
    description,
    for_gender,
    product_id,
    image_url,
    // made_in
  } = data;

  // Splice description text from 0 to 10 characters
  const slicedDescription = description.slice(0, 10);

  // Append ellipsis (...) if the description is longer than 10 characters
  const displayDescription =
    description.length > 10 ? `${slicedDescription}...` : slicedDescription;

  const [liked, setLiked] = React.useState(false);

  return (
    <div className="card">
      <div className="card-image-container">
        <img className="card-image h-[200px]" src={image_url} alt="Something image" />
        <button className="like-button" onClick={() => setLiked(!liked)}>
          {liked ? <HeartFilled /> : <HeartOutlined />}
        </button>
      </div>
      <div className="card-content p-3">
        <Link to={`/posts/${product_id}`}>
          <h1>{displayDescription}</h1>
        </Link>
        <p>{for_gender}</p>
      </div>
    </div>
  );
};

export default Index;

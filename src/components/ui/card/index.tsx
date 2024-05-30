import React from "react";
import { Link } from "react-router-dom";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import { postAPI } from "@service";
import { toast} from "react-toastify";

import "./style.scss";

const Index = ({ data }: { data: any }) => {
  const {
    description,
    for_gender,
    product_id,
    image_url,
    // made_in
  } = data;

  async function PostLike() {
    // console.log("hello")
    try {
      const response = await postAPI.postlike(product_id);
      // console.log(response);
      if (response.status === 201) {
        toast.success("Liked");
      }
      
      // console.log(product_id );
    } catch (err: any) {
      console.log(err)
    }
  }

  // Splice description text from 0 to 10 characters
  const slicedDescription = description.slice(0, 20);

  // Append ellipsis (...) if the description is longer than 10 characters
  const displayDescription =
    description.length > 20 ? `${slicedDescription}...` : slicedDescription;

  const [liked] = React.useState(false);

  return (
    <>
    
    <div className="card">
      <div className="card-image-container">
        <img className="card-image h-[200px]" src={image_url ? image_url : "https://cdn.dribbble.com/users/3512533/screenshots/14168376/media/1357b33cb4057ecb3c6f869fc977561d.jpg?resize=400x300&vertical=center"} alt="Something image" />
        <button className="like-button" onClick={() => PostLike()}>
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
    </>
  );
};

export default Index;

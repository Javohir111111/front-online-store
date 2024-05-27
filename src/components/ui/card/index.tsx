import { Link } from "react-router-dom";
import "./style.scss";
import { CardPropType } from "@interface";

const index = (data: any) => {
  const {
    data: { description, for_gender, product_id}
  } = data;
  return (
    <div className="card">
      <img src="https://picsum.photos/id/541/300/250" alt="smth image" />
      <div className="p-3">
        <Link to={`/posts/${product_id}`}><h1>{description}</h1></Link>
        <p>{for_gender}</p>
      </div>
    </div>
  );
};

export default index;




// age_max
// :
// 34
// age_min
// :
// 23
// category_id
// :
// "03a86ed0-2b09-4634-bc19-a302008de0a4"
// color
// :
// "black"
// cost
// :
// 456
// count
// :
// 43
// description
// :
// "asdfg"
// discount
// :
// 12
// for_gender
// :
// "male"
// made_in
// :
// "vietnam"
// product_id
// :
// "222bfbb7-6556-42b3-a8ad-eb621d1d2ab4"
// product_name
// :
// "shoe"
// size
// :
// 91
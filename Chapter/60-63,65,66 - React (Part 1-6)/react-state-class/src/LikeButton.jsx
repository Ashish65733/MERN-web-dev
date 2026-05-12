import { useState } from "react";

export default function LikeButton() {
  let [isLiked, setIsLiked] = useState(false);

  let toggleLike = () => {
    setIsLiked(!isLiked);
  };

  let likeStyle = { color: "red" };

  return (
    <div>
      <p onClick={toggleLike} style={likeStyle}>
        {isLiked ? (
          <i className="fa-solid fa-heart"></i>
        ) : (
          <i className="fa-regular fa-heart"></i>
        )}
      </p>
    </div>
  );
}

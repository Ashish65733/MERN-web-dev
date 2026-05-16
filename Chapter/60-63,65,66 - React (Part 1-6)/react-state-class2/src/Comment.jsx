import { useState } from "react";
import CommentsForm from "./CommentsForm";
import "./Comment.css";

export default function Comment() {
  let [comments, setComments] = useState([
    {
      username: "ashishVankar",
      remarks: "Great job!",
      rating: 4,
    },
  ]);

  let addNewComment = (comment) => {
    setComments((currComment) => [...currComment, comment]);
  };

  return (
    <div className="comments-container">
      <div>
        <h3>ALL Comments</h3>
        <div className="comments-list">
          {comments.map((comment, idx) => (
            <div className="comment" key={idx}>
              <span>{comment.remarks}</span> <br />
              <span>rating = {comment.rating}</span>
              <p>- @{comment.username}</p>
            </div>
          ))}
        </div>
      </div>

      <CommentsForm addNewComment={addNewComment} />
    </div>
  );
}

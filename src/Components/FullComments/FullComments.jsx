import { useEffect, useState } from "react";
import "./FullComments.css";
import axios from "axios";
const FullComments = ({ setComments, commentId, setCommentId }) => {
  const [comment, setComment] = useState(null);
  const deleteHandler = async () => {
    try {
      await axios.delete(`http://localhost:3001/comments/${commentId}`);
      const { data } = await axios.get("http://localhost:3001/comments");
      setComments(data);
      setComment(null);
      setCommentId(null);
      // setComments(null);
    } catch (error) {}
  };
  useEffect(() => {
    axios
      .get(`http://localhost:3001/comments/${commentId}`)
      .then((res) => setComment(res.data))
      .catch();
  }, [commentId]);
  let commentDetail = <p className="fullComment">Please Select a Comment</p>;
  if (commentId) commentDetail = <p className="fullComment">Loading</p>;
  if (comment) {
    commentDetail = (
      <form className="fullCommentForm">
        <div className="fullComment">
          <p>name : {comment.name}</p>
          <p>email : {comment.email}</p>
          <p>{comment.body}</p>
          <button type="button" className="deleteBtn" onClick={deleteHandler}>
            Delete
          </button>
        </div>
      </form>
    );
  }
  return commentDetail;
};

export default FullComments;

import { useState } from "react";
import "./NewComment.css";
import axios from "axios";
const NewComment = ({setComments}) => {
  const [comment, setComment] = useState({
    name: "",
    email: "",
    body: "",
  });
  const changeHandler = (e) => {
    setComment({ ...comment,[e.target.name]: e.target.value });
    // console.log(e.target.name, e.target.value);
  };
  const postCommentHandler = () => {
    axios
      .post("http://localhost:3001/comments", {
        ...comment,
        postId: 10,
      })
      .then((res) => axios.get("http://localhost:3001/comments"))
      .then((res) => setComments(res.data))
      .catch();
  };
  
  return (
    <form className="newCommentForm">
      <div className="newComment">
        <div>
          <p>name</p>
          <input type="text" onChange={changeHandler} name="name" />
        </div>
        <div>
          <p>email</p>
          <input type="text" onChange={changeHandler} name="email" />
        </div>
        <div>
          <p>body</p>
          <textarea type="textarea" onChange={changeHandler} name="body" />
        </div>
        <button type="button" onClick={postCommentHandler}>Add New Comment</button>
      </div>
    </form>
  );
};

export default NewComment;

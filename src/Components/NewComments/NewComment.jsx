import "./NewComment.css";
const NewComment = () => {
  return (
    <form className="newCommentForm">
      <div className="newComment">
      <div>
        <p>name</p>
        <input type="text" />
      </div>
      <div>
        <p>email</p>
        <input type="text" />
      </div>
      <div>
        <p>body</p>
        <input type="text" />
      </div>
      </div>
    </form>
  );
};

export default NewComment;

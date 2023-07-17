import "./Comments.css";
const Comments = ({ name, email,onClick }) => {
  return (
    <div className="comments" onClick={onClick}>
      <p>name : {name}</p>
      <p>email : {email}</p>
    </div>
  );
};

export default Comments;

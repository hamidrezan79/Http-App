import FullComments from "../../FullComments/FullComments";
import Comments from "../../Comments/Comments";
import NewComment from "../../NewComments/NewComment";
import "./discussion.css";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
const Discussion = () => {
  const [comments, setComments] = useState(null);
  const [selectedId, setSelectedId] = useState(null);
  const [error, setError] = useState(false);
  useEffect(() => {
    axios
      .get("http://localhost:3001/comments")
      .then((response) => {
        setComments(response.data);
      })
      .catch((error) => {
        setError(true);
      });
  }, []);
  const selectHandler = (id) => {
    setSelectedId(id);
  };
  const renderComments = () => {
    let renderedComments = <p>Loading...</p>;
    if (error) renderedComments = <p>Fetching Data Failed</p>;
    if (comments && !error) {
      renderedComments = comments.map((c) => (
        <Comments
          key={c.id}
          name={c.name}
          email={c.email}
          onClick={() => selectHandler(c.id)}
        />
      ));
    }
    return renderedComments;
  };

  return (
    <main>
      <section>{renderComments()}</section>
      <section>
        <FullComments  commentId={selectedId} setCommentId={setSelectedId} setComments={setComments}/>
      </section>
      <section>
        <NewComment setComments={setComments} />
      </section>
    </main>
  );
};

export default Discussion;

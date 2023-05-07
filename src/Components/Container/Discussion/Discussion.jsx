import FullComments from "../../FullComments/FullComments";
import Comments from "../../Comments/Comments";
import NewComment from "../../NewComments/NewComment";
import "./discussion.css"
const Discussion = () => {
  return (
    <main>
      <section>
        <Comments />
        <Comments />
        <Comments />
      </section>
      <section>
        <FullComments />
      </section>
      <section>
        <NewComment />
      </section>
    </main>
  );
};

export default Discussion;

import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";
import Avatar from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";

interface iAuthor {
  name: string;
  role: string;
  avatar: string;
}

interface iContent {
  type: "paragraph" | "link";
  content: string;
}

interface iPostProps {
  author: iAuthor;
  publishedAt: Date;
  content: iContent[];
}

const Post = ({ author, publishedAt, content }: iPostProps) => {
  const [comment, setComment] = useState(["Post muito bacana, bom dms!"]);
  const [newCommentText, setNewCommentText] = useState("");

  const handlerSubmit = (event: FormEvent) => {
    event.preventDefault();

    setComment([...comment, newCommentText]);
    setNewCommentText("");
  };

  // abaixo se usa um changeEvent para tipagem para declarar q foi uma tag dentro do form que acionou o evento
  const handlerNewComment = (event: ChangeEvent<HTMLTextAreaElement>) => {
    event.target.setCustomValidity("");
    setNewCommentText(event.target.value);
  };

  const deleteComment = (commentDelete: string) => {
    const commentsWithoutDeletedOne = comment.filter((elem) => {
      return elem !== commentDelete;
    });

    setComment(commentsWithoutDeletedOne);
  };

  // quando surge um evento de invalidação coloque a seguinte tipagem
  const handlerNewCommentInvalid = (
    event: InvalidEvent<HTMLTextAreaElement>
  ) => {
    event.target.setCustomValidity("Esse campo é obrigatorio!");
  };

  const isNewCommentEmpty = newCommentText.length === 0;

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://github.com/guilhermewall.png" />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title="11 de Maio às 19:50h" dateTime="2023-08-26 19:50:06">
          {`${publishedAt}`}
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>
          <a href="">{content[0].content}</a>
        </p>
        <p>
          <a href="">#novoprojeto #nlw #rocketseat</a>
        </p>
      </div>

      <form onSubmit={handlerSubmit} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          onChange={handlerNewComment}
          value={newCommentText}
          name="comment"
          placeholder="Deixe um comentário"
          onInvalid={handlerNewCommentInvalid}
          required
        />
        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comment.map((elem, index) => {
          return (
            <Comment
              key={elem}
              content={elem}
              onDeleteComment={deleteComment}
            />
          );
        })}
      </div>
    </article>
  );
};
export default Post;

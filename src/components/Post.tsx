import SinglePost from "../models/SinglePost";
import "./Post.css";

interface Props {
  post: SinglePost;
}

const Post = ({ post }: Props) => {
  return (
    <li className="Post">
      <p>{post.title}</p>
      {post.thumbnail !== "self" && (
        <img src={post.thumbnail} alt={post.title} />
      )}

      <a href={post.url}> Link to original</a>
    </li>
  );
};

export default Post;

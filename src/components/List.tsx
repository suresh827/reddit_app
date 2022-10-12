import Children from "../models/Children";
import SinglePost from "../models/SinglePost";
import "./List.css";
import Post from "./Post";

interface Props {
  posts: Children[];
}
const List = ({ posts }: Props) => {
  return (
    <div className="List">
      <ul>
        {posts.map((item) => (
          <Post post={item.data} key={item.data.title} />
        ))}
      </ul>
    </div>
  );
};

export default List;

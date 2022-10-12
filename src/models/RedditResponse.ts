import SinglePost from "./SinglePost";

interface Children {
  data: SinglePost;
}

interface Data {
  children: Children[];
}

export default interface RedditResponse {
  data: Data;
}

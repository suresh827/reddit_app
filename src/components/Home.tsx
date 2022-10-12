import { useEffect, useState } from "react";
import Children from "../models/Children";
import { getSubredditPosts } from "../services/RedditService";
import "./Home.css";
import List from "./List";

const Home = () => {
  const [posts, setPosts] = useState<Children[]>([]);
  useEffect(() => {
    getSubredditPosts("aww").then((response) => {
      // console.log(response);
      setPosts(response.data.children);
    });
  });

  return (
    <div className="Home">
      <List posts={posts} />
    </div>
  );
};

export default Home;

import RedditResponse from "../models/RedditResponse";
import axios from "axios";

export const getSubredditPosts = (term: string): Promise<RedditResponse> => {
  return axios
    .get(`https://www.reddit.com/r/${encodeURIComponent(term)}/.json`)
    .then((response) => {
      return response.data;
    });
};

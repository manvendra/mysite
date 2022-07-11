import {POSTS_URL,POSTS_QRY_PARAM,POSTS_KEY} from '../common/Constants'
import * as Utils from '../common/Utils'
import axios from "axios";

const url = POSTS_URL + '?' + POSTS_QRY_PARAM + '&key=' + POSTS_KEY;

const postsStore = (set) => ({
    posts: [],
    labels:[],
    shouldFetchPosts: true,
    fetchPosts: async () => {
            const response = await axios.get(url);
            set({ posts:  Utils.sortPostByRank(response.data.items), 
                shouldFetchPosts: false, 
                labels:  Utils.extractUniqueLabels(response.data.items)});
    }
  });
  
  export default postsStore;
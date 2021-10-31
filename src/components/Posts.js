import { useEffect, useState } from "react";
import { getRequestData } from "../services/service";
import PostItem from "../components/PostItem";

const Posts = (props) => {
  const [postsData, setPostsData] = useState([]);
  const commentAPIURL = "https://jsonplaceholder.typicode.com/posts/1/comments";
  useEffect(() => {
    const getResponseFromAPI = async () => {
      const data = await getRequestData(commentAPIURL);
      // console.log(data)
      if (data && data.length) {
        setPostsData(data);
      } else {
        console.log("eror occured");
      }
    };
    getResponseFromAPI();
  }, []);
  return (
    <>
      <h1>POSTS APP</h1>
      <div>
        {postsData &&
          postsData.length > 0 &&
          postsData.map((ele) => {
            return <PostItem key={ele.id} data={ele} />;
          })}
      </div>
    </>
  );
};

export default Posts;

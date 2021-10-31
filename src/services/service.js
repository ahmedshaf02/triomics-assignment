import axios from "axios";

// const commentAPI = 'https://jsonplaceholder.typicode.com/posts/1/comments'
// const userAPI = 'https://reqres.in/api/users?page=2'

export const getRequestData = async (url) => {
  try {
    const responseData = await axios.get(url);
    // console.log(responseData)
    return responseData.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

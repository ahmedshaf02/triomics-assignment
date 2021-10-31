import { useState } from "react";
import { getRequestData } from "../services/service";

const PostItem = (props) => {
  // console.log(props.data)
  // state
  const userAPIURL = "https://reqres.in/api/users?page=2";
  const [userData, setUserData] = useState([]);

  // to get user data from user API
  const handleClick = async () => {
    const userAPIData = await getRequestData(userAPIURL);
    // console.log(userAPIData.data)
    // to ser API response in state
    if (userAPIData && userAPIData.data && userAPIData.data.length) {
      setUserData(userAPIData.data);
    } else {
      console.log("api failed");
    }
  };
  // to get ID of comment and user
  const handleClickUser = (userId) => {
    console.log("userId", userId);
    console.log("commentId", props.data.id);
  };
  return (
    <>
      <div style={{ border: "1px solid black", margin: "10px", padding: 10 }}>
        <h5>NAME: {props.data.name}</h5>
        <p>BODY: {props.data.body}</p>
        <button onClick={handleClick}>click me</button>
        {userData && userData.length > 0 && (
          <div
            style={{ border: "1px solid black", margin: "10px", padding: 10 }}
          >
            <ul>
              {userData.map((ele) => {
                return (
                  <div>
                    <li key={ele.id}>
                      {ele.id} {ele.first_name}
                    </li>
                    <button onClick={() => handleClickUser(ele.id)}>
                      click me for ID
                    </button>
                  </div>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default PostItem;

import { useState, useEffect } from "react";
// import { dataBase } from "./dbConnection.js";

const Dogs = () => {
  const [dogUsersList, setDogUsers] = useState([]);
  //--------------------------------------------------------------//

  //--------------------------------------------------------------//
  function getPosts() {
    const PostsUrl = "https://jsonplaceholder.typicode.com/posts";

    return fetch(PostsUrl).then((data) => data.json());
  }
  //--------------------------------------------------------------//

  //--------------------------------------------------------------//
  // useEffect for initial Mounting of API resource for users
  useEffect(() => {
    const url = "https://api.thedogapi.com/v1/breeds";

    fetch(url)
      .then((data) => data.json())
      .then((users) => setDogUsers(users));

    return () => {};
  }, []);
  //--------------------------------------------------------------//

  //--------------------------------------------------------------//
  const style = { textDecoration: "underline", margin: "40px 0 60px 0" };
  //--------------------------------------------------------------//

  //--------------------------------------------------------------//
  return (
    <div>
      <h1 style={style}>A list of amazing breed of Dogs</h1>
      <ol>
        {dogUsersList.map((dogOwner) => (
          <li key={dogOwner.id}>{dogOwner.name}</li>
        ))}
      </ol>
    </div>
  );
  //--------------------------------------------------------------//
};

export default Dogs;

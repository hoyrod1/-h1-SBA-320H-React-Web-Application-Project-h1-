import { useState, useEffect } from "react";
// import { dataBase } from "./dbConnection.js";

const Dogs = ({ counter }) => {
  // console.log("Testing outside useEffect");
  //-------------------------------------------//
  // useEffect for Mounting set empty array []
  // useEffect(() => {
  //   console.log("Testing the code", counter);
  // }, []);
  //-------------------------------------------//

  //-------------------------------------------//
  // useEffect for Mounting and Updating state
  // Set the array to [counter] to Update state
  // useEffect(() => {
  //   console.log("Testing the code", counter);
  // }, [counter]);
  //-------------------------------------------//

  //-------------------------------------------//
  // const database = dataBase;
  // useEffect for mounting and unMounting test data
  // Clears or removes the old state value before
  // updating new state value
  // useEffect(() => {
  //   console.log("Testing the code", database.connect);
  //   // database.connect;

  //   return () => {
  //     console.log("Unmount UseEffect", database.disconnect);
  //     // database.disconnect;
  //   };
  // }, [counter]);
  //--------------------------------------------------------------//
  // Test Data
  // const dogOwners = [
  //   { id: 1, name: "Rodney St. Cloud" },
  //   { id: 2, name: "Kaden St. Cloud" },
  // ];
  const [postList, setPosts] = useState([]);
  const [dogUsersList, setDogUsers] = useState([]);
  const [refresh, setRefresh] = useState(false);
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
    getPosts().then((posts) => setPosts(posts));

    return () => {};
  }, [refresh]);
  //--------------------------------------------------------------//

  //--------------------------------------------------------------//
  // useEffect for initial Mounting of API resource for users
  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/users";

    fetch(url)
      .then((data) => data.json())
      .then((users) => setDogUsers(users));

    return () => {};
  }, [refresh]);
  //--------------------------------------------------------------//

  //--------------------------------------------------------------//
  const style = { border: "2px solid blue", margin: "10px 0" };
  //--------------------------------------------------------------//

  //--------------------------------------------------------------//
  return (
    <div>
      <h1>List of Dogs {counter}</h1>
      {dogUsersList.map((dogOwner) => (
        <li key={dogOwner.id}>{dogOwner.name}</li>
      ))}
      <button onClick={() => setRefresh((refresh) => !refresh)} style={style}>
        Refresh
      </button>
      {postList.map((posts) => (
        <h3 key={posts.id}>{posts.title}</h3>
      ))}
    </div>
  );
  //--------------------------------------------------------------//
};

export default Dogs;

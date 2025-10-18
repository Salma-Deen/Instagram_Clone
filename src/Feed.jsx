import React from 'react';
import Stories from "./Stories.jsx";
import Posts from "./Posts.jsx";
import "./index.css"
function Feed() {
  return (
    <div className="d-flex ">
      <div>
        <div> <Stories /> </div>
        <div > <Posts /> </div>
      </div>
    </div>
  );
}

export default Feed;

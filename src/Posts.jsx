import React from 'react'
import { useState, useEffect } from "react";
function Posts() {
    const [posts, setPost] = useState([]);
    useEffect(() => {
        fetch("/data/db.json")
            .then((data) => data.json())
            .then((data) => setPost(data.posts))
            .catch((err) => console.log(err)
            )
    }, []);
    return (
        <div >
            <div className="d-flex justify-content-center">
                {posts.length > 0 ?
                    (<div className="post">
                        {posts.map((p) => (
                            <div className="m-3" key={p.id}>
                                <div className="d-flex">
                                    <img className="dpp rounded-circle " src={p.user.profilePic} alt="profilepic" />

                                    <h5 className="textpost">{p.user.username}</h5>
                                </div> <img className="image" src={p.image} alt="post" />
                                <div className="my-2 ">
                                    <i className="bi bi-heart h4 m-2 "></i>
                                    <i className="bi bi-chat h4 m-2"></i>
                                    <i className="bi bi-send h4 m-2"></i> </div>
                                <div> <b>{p.likes} Likes</b> </div>
                                <p>{p.caption}</p> <hr /> </div>))} </div>)
                    : (<div>Loading....</div>)} </div>
        </div>)
}
export default Posts

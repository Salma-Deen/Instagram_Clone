import React from 'react'
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Stories() {
    const [stories, setStories] = useState([]);
    const navigate = useNavigate();
    let tot = 0;
    useEffect(() => {
        fetch("/data/db.json")
            .then((data) => data.json())
            .then((data) => setStories(data))
            .catch((err) => console.log(err))
    }, []);
    return (
        <div className="story d-flex">
            <div className="d-none">
                {tot = stories.length}
            </div>
            {stories.length > 0 ? (
                stories.map((story) => (
                    <div key={story.id} className="mx-2" onClick={() => { navigate(`/story/${story.id}/${tot}`) }}>
                        <div className="gradient-border">
                            <img src={story.user.profilePic} alt="profilepic" className="story-dp rounded-circle" />
                        </div>
                        <p className="text-truncate mt-3" style={{ width: "60px" }}>{story.user.username}</p>
                    </div>
                ))
            ) : (<p>Loading...</p>)}
        </div>
    )
}

export default Stories

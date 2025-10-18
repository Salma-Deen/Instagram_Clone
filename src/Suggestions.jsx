import React from 'react'
import { useState, useEffect } from 'react';
import "./index.css";
function Suggestions() {
  const [profile, setProfile] = useState(null);
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    fetch("/data/db.json")
      .then((data) => data.json())
      .then((data) => setProfile(data))
      .catch((err) => console.log(err))

    fetch("/data/db.json")
      .then((data) => data.json())
      .then((data) => setSuggestions(data))
      .catch((err) => console.log(err))

  }, []);
  return (
    <div className="suggest">
      <div className="suggestions w-75 m-4">
        {profile ? <div className="d-flex ">
          <img className="dp rounded-circle" src={profile.profilePic} alt="profilepic" />
          <h5 >{profile.username}</h5>
          <small className="ms-auto mt-3 text-primary">Switch</small>
        </div> : <p>Loading</p>}
        <div className="d-flex justify-content-between mt-3">
          <p className="text-muted ">Suggested for you</p>
          <small><b>See All</b></small>
        </div>
        {suggestions.length > 0 ? (
          <div>
            {suggestions.map((su) => (
              <div key={su.id}>
                <div className="d-flex ">
                  <img className="dp rounded-circle " src={su.profilePic} alt="profilepic" />
                  <h5 >{su.username}</h5>
                  <p className="text-primary ms-auto mt-3">Follow</p>
                </div>
              </div>
            ))}
          </div>) :
          (<div>Loading....</div>)
        }
      </div>
    </div>
  )
}

export default Suggestions

import React from "react";
import "./index.css"; // Make sure this file exists

function Sidebar() {
  return (
    <div className="sidebar d-flex flex-column justify-content-between p-3">
      {/* Top Section */}
      <div>
        <img
          className="logo-text mt-3 mb-4"
          src="/assets/insta_text.png"
          alt="Instagram Logo"
        />
         <div className="logo-icon mt-3 mb-4">
          <i className="bi bi-instagram h3"></i>
        </div>
        <div className="menu-item">
          <i className="bi bi-house-door-fill h4"></i>
          <span>Home</span>
        </div>
        <div className="menu-item">
          <i className="bi bi-search h4"></i>
          <span>Search</span>
        </div>
        <div className="menu-item">
          <i className="bi bi-compass h4"></i>
          <span>Explore</span>
        </div>
        <div className="menu-item">
          <i className="bi bi-play-btn h4"></i>
          <span>Reels</span>
        </div>
        <div className="menu-item">
          <i className="bi bi-send h4"></i>
          <span>Messages</span>
        </div>
        <div className="menu-item">
          <i className="bi bi-heart h4"></i>
          <span>Notifications</span>
        </div>
        <div className="menu-item">
          <i className="bi bi-plus-square h4"></i>
          <span>Create</span>
        </div>
        <div className="menu-item">
          <i className="bi bi-person-circle h4"></i>
          <span>Profile</span>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="menu-bottom mb-3">
        <div className="menu-item">
          <i className="bi bi-list h4"></i>
          <span>More</span>
        </div>
        <div className="menu-item">
          <i className="bi bi-boxes h4"></i>
          <span className="text-truncate" >Also from Meta</span>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;

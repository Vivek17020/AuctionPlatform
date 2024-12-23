import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaGithub } from 'react-icons/fa';
import './SocialMedia.css'; // Import CSS file for styling

function SocialMedia() {
  return (
    <div className="social-icons">
      <h1>Follow Us</h1>
      <a href="https://www.facebook.com"><FaFacebook className="icon" /></a>
      <a href="https://www.twitter.com"><FaTwitter className="icon" /></a>
      <a href="https://www.instagram.com"><FaInstagram className="icon" /></a>
      <a href="https://www.youtube.com"><FaYoutube className="icon" /></a>
      <a href="https://www.github.com"><FaGithub className="icon" /></a>
    </div>
  );
}

export default SocialMedia
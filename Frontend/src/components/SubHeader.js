import React from 'react'
import './SubHeader.css';
import { Link } from 'react-router-dom'

function SubHeader() {
  return (
    <nav className='sub-navbar'>
      <ul className='sub-header'>

        <li><Link to="/upcomingAuction" className='sub-header-content'>Upcoming Auction</Link></li>
        <li><Link to="/ongoingAuction" className='sub-header-content'>Ongoing Auction</Link></li>
        <li><Link to="/recentlySold" className='sub-header-content'>Recently Sold</Link></li>
        <li><Link to="/art" className='sub-header-content'>Art</Link></li>
        <li><Link to="/photographt" className='sub-header-content'>Photography</Link></li>
        <li><Link to="/tweet" className='sub-header-content'>Tweet</Link></li>
        <li><Link to="/music" className='sub-header-content'>Music</Link></li>
        <li><Link to="/video" className='sub-header-content'>Image</Link></li>
        <li><Link to="/crypto" className='sub-header-content'>Crypto</Link></li>
        <li><Link to="/Bidder" className='sub-header-content'>Bidder</Link></li>
        <li><Link to="/AuctionCreator" className='sub-header-content'>AuctionCreater</Link></li>
        <li><Link to="/AuctionCreator" className='sub-header-content'>AuctionManager</Link></li>
        <li><a href="https://t.me/Auctioncompanion_Bot" className="sub-header-content" target="_blank" rel="noopener noreferrer">
    AiAgent
  </a></li>
        
      </ul>
    </nav>

  )
}

export default SubHeader
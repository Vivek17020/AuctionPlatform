import React from 'react'
import ControlledCarousel from './ControlledCarousel'
import Card from './Card'
import LiveAuction from './LiveAuction'
import RecentlySold from './RecentlySold'



function Main() {
  return (
    <div>
       <ControlledCarousel/>
       <Card/>
       <LiveAuction/>
       <RecentlySold/>

    </div>
  )
}

export default Main
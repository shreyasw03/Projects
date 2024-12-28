import React from 'react'
import "./SidebarRow.css"
import "./Sidebar.js"


function SidebarRow({Icons ,title}) {
  return (
    <div className="SidebarRow" >
    <Icons className="sidebarrow__icon" />
      <h1 className='sidebarrow__title'>{title}</h1>
    </div>
  )
}

export default SidebarRow

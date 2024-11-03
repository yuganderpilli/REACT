import React from 'react'



function TabButton({children,onSelect,isSelected}) {
  return (
   <li>
    <button className={isSelected ? 'active':" "} onClick={()=>{onSelect(children)}}>{children}</button>
   </li>
  )
}

export default TabButton
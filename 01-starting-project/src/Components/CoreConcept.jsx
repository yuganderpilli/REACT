import React from 'react'

function CoreConcept({image,title,description}) {
  return (
   <li>
    <img src={image} alt={description} />
    <h3>{title}</h3>
    <p>{description}</p>
   </li>
  )
}

export default CoreConcept
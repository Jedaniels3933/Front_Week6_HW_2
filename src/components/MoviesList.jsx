import React, {useState} from 'react'

import React from 'react'

const MoviesList = () => {
  return (
    <div>
        <h1>Movies List</h1>
        <ul>
            <li>The Departed</li>
            <li>Rocky</li>
            <li>Halloween</li>
        </ul>
        <button onClick={updateUsers}>Movie Details</button>
        <button onClick={sortUsers}>Delete </button>
      
    </div>
  )
}

export default MoviesList

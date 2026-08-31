import React from 'react'

const card = (props) => {
  return (
    <div>
        <div className='card'>
            <h1>{props.user}</h1>
            <p>Lorem ipsum dolor sit amet</p>
        </div>
    </div>
  )
}

export default card

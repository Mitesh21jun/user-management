import React from 'react'

function Card({email,firstName,lastName,pwd,userName}) {
    return (
        <div className='card'>
        <div className="card-body">
          <h5>{firstName} {lastName}</h5>
        </div>
      </div>
    )
}

export default Card

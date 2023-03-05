import React from 'react'

export const Home = (props) => {
  return (
    <>
        <h1>
            welcome to Home , {props.name} ({props.gender})</h1>
        {props.children}
        </>
  )
}


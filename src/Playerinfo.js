import React from 'react'

export default function Playerinfo(props) {
const element = props.winner? <h1>Winner: {props.winner}</h1>: <h1>Turn:{props.turn}</h1>
    return (
        element
    )
}

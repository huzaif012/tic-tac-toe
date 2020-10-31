import React from 'react'
import styles from './Grid.module.css'
import Cross from "./Cross"
import Circle from "./Circle"
const renderSVG = svg =>{
    if(svg === "cross"){
        return <Cross size='50' />
    }
    else if(svg ==="circle"){
        return <Circle size='50' />
    }
    else{
        return null;
    }
}
function refreshPage() {
    window.location.reload(false);
  }
export default function Grid(props) {
    const divisions = props.positions.map((value, index) =>{
        const isWinningIndex =props.winningIndexes.includes(index)
        return(
            <div 
            className={isWinningIndex?styles.winner:null}
            key= {index}
            onClick= {()=>{
                props.setPositions(index)
            }}>
                {renderSVG(value)}
            </div>

        )
    })
    return (
        <div className= {styles.container}>
            {divisions}
            <button onClick={refreshPage}>Restart</button>
        </div>
    )
}

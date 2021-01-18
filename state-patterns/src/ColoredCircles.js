import React, { useState } from 'react';
import Circle from './Circle'
import ColorButtons from './ColorButtons'


function getRandom(min = 0, max = 100) {
    return Math.random() * (max - min) + min;
}
const ColoredCircles = () => {
    const [circles, setCircles] = useState([])
    const addCircle = (color) => {
        setCircles(circles => [...circles, { color, x: getRandom(), y: getRandom() }])
    }
    // console.log(circles)
    const changePosition = (idx) => {
        setCircles(circles => {
            const copy = [...circles];
            copy[idx].x = getRandom();
            copy[idx].y = getRandom();
            return copy;
        })
    }
    return (
        <div>
            <ColorButtons addCircle={addCircle} options={['peachpuff', 'lightsteelblue', 'paleturquoise']} />
            {circles.map(({ color, x, y }, idx) => (
                <Circle
                    changePosition={changePosition}
                    color={color}
                    x={x} y={y}
                    idx={idx} key={idx} />
            ))}

        </div>
    )
}

export default ColoredCircles;
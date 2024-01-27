import React, { useEffect, useState } from 'react'
import { Tooltip } from 'react-tooltip'

const BarChart = ({data}) => {
    const [xAxis, setXAxis] = useState()
    const [anime, setAnime] = useState(false)
    
    // gets height value
    const maxValue = ()=>{
        let maxVal =0
        if (data && data.length > 0){
            maxVal = Math.max.apply(null,
                data.map(function (x) { return x.amount }));
        }
        return maxVal
    }
    
    // Max Y value
    const heightBar = ()=>{
        let heightVal = maxValue()
        if (heightVal){
            const modeVal = heightVal % 10
            if (modeVal !== 0){
                heightVal = heightVal + modeVal
            }
        }
        return heightVal ? heightVal : 100
    }

    // Bar height
    const calcPercent = (val)=>{
        const max_value = heightBar()
        const max_Val = max_value ? max_value : 1
        return `${(val/max_Val) * 100}%`
    }
    // Calculate rate at x axis
    const sideBarCount = ()=>{
        let myList = []
        const heightVals = heightBar()
        const lowestVal = heightVals / 10
        let i = 0
        while (i < 11){
            myList.push(i* lowestVal)
            i++
        }
        return myList.reverse()
    }
    
    // Aid chart animation
    useEffect(()=>{
        const val = sideBarCount()
        setXAxis(val)
        setTimeout(() => {
            setAnime(true)
        }, 100);
    },[data]);

    return (
        <div className='BarChartContainer'>
            <div className="linesContainer">
                <div className='barValues'>
                    {xAxis && xAxis.map(xVal=>(
                        <div key={xVal}>{xVal > 0 ? `${xVal}.000` : 0}</div>
                    ))}
                </div>
                <div className='relative'>
                    {xAxis && [...xAxis,1].map((xVal,i)=>(
                        <div className="line" key={i} />
                    ))}

                    <div className="LongBarContainer">
                        {data && data.map((value, i)=>(
                            <div className="sigleBar" key={i}>
                                <div className="Bar" style={{height: anime ? calcPercent(value.amount) : "0%"}} data-tooltip-id="my-tooltip" data-tooltip-content={`$${value.amount},000`}></div>
                                <div className="barLabel">{value.month}</div>
                            </div>
                        ))}
                        
                    </div>
                </div>
                <Tooltip place="top" id="my-tooltip" />
            </div>
            

        </div>
    )
}

export default BarChart
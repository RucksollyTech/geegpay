import React, { useEffect } from 'react'
import SummaryData from '../Data/SummaryData'

const ChartSummary = () => {
    const items = SummaryData()
    return (
        <div className='rightBars'>
            {items && items.map(item => (
                <div className='rightBarContent' key={item.id} data-aos="fade-up" data-aos-duration="2000">
                    <div className="theCondition">
                        <div className='rounds center'>
                            <img src={item.logo} alt="Icon" />
                        </div>
                        <div>
                            {item.color === "green" ? 
                                <img src="/Icons/chartGreen.svg" alt="chart" />
                            :
                                <img src="/Icons/chartRed.svg" alt="chart" />
                            }
                            
                        </div>
                    </div>
                    <div className='muted font_18'>
                        {item.title}
                    </div>
                    <div className='digitValue'>
                        {item.value}
                    </div>
                    <div className='greenArrow'>
                        {item.color === 'green' ?
                            <span className='greenBg'>
                                <img src="/Icons/arrowTop.svg" alt="top" />
                                <span className="green">23,5%</span>
                            </span>
                        : 
                            <span className='redBg'>
                                <img src="/Icons/arrowDown.svg" alt="top" />
                                <span className="red">23,5%</span>
                            </span>
                        }
                        <span className='font_12 bold5'>
                            vs. previous month
                        </span>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ChartSummary
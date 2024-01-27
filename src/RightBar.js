import React, { useEffect } from 'react'
import ChartSummary from './Components/ChartSummary'

const RightBar = () => {
    
    return (
        <div className='rightBarContainer'>
            {/* Chart Summary */}
            <div className='chartSummaryRightBar'>
                <ChartSummary />
            </div>
            <div className="barChartContainer" data-aos="fade-up" data-aos-duration="2000">
                <div className="salesHeader pb_25">
                    <div className='sales bold6'>
                        Top Platform
                    </div>
                    <div className='pointer sales green bold6'>
                        See All
                    </div>
                </div>
                <div className='pb_25'>
                    <div className='sales bold6'>
                        Book Bazaar
                    </div>
                    <div className='barBg'>
                        <div className="barPercentage purpleBg"></div>
                    </div>
                    <div className="flexBetween">
                        <span>
                            $2,500,000
                        </span>
                        <span>
                            +15%
                        </span>
                    </div>
                </div>
                <div className='pb_25'>
                    <div className='sales bold6'>
                        Artisan Aisle
                    </div>
                    <div className='barBg'>
                        <div className="barPercentage blBg"></div>
                    </div>
                    <div className="flexBetween">
                        <span>
                            $1,800,000
                        </span>
                        <span>
                            +10%
                        </span>
                    </div>
                </div>
                <div className='pb_25'>
                    <div className='sales bold6'>
                        Toy Troop
                    </div>
                    <div className='barBg'>
                        <div className="barPercentage orange"></div>
                    </div>
                    <div className="flexBetween">
                        <span>
                            $1,200,000
                        </span>
                        <span>
                            +8%
                        </span>
                    </div>
                </div>
                <div className='pb_25'>
                    <div className='sales bold6'>
                        Book Bazaar
                    </div>
                    <div className='barBg'>
                        <div className="barPercentage redBg"></div>
                    </div>
                    <div className="flexBetween">
                        <span>
                            $2,500,000
                        </span>
                        <span>
                            +15%
                        </span>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default RightBar
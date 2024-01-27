import React from 'react'
import BarChart from "./Components/BarChart"
import Orders from './Components/Orders'
import OrdersData from './Data/OrdersData'
import ChartSummary from './Components/ChartSummary'
import ChartData from './Data/ChartData'
const Home = () => {
    // Data for Orders component below
    const data = OrdersData()

    // Data for Bar chart below
    const dataBar = ChartData()
    return (
        <div className='home'>
            <div className="barChartContainer">
                <div className="salesHeader">
                    <div className='sales bold6'>
                        Sales Trends
                    </div>
                    <div className="flex">
                        <div className="center filter_fontsize">
                            <span className='sor'>
                                Sort by:
                            </span>
                        </div>
                        <div className="weekly center filter_fontsize">
                            <span>
                                Weekly
                            </span>
                            <img src="/Icons/icon10.svg" alt="Drop down" />
                        </div>
                    </div>
                </div>
                {/* Display the barchart */}
                <BarChart data={dataBar} />
            </div>
            <div className="chartSummaryHome">
                <ChartSummary />
            </div>
            <div className="barChartContainer" data-aos="fade-up" data-aos-duration="2000">
                <div className="salesHeader">
                    <div className='sales bold6'>
                        Last Orders
                    </div>
                    <div className='pointer sales green bold6'>
                        See All
                    </div>
                </div>
                {/* Displays orders */}
                <Orders data={data}/>
            </div>
        </div>
    )
}

export default Home
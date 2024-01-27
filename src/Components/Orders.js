import React from 'react'

// data is coming from parent component
const Orders = ({data}) => {
    const checkLenght = (x)=> {
        const dataValue = x.length
        const value = dataValue < 22 ? x : `${x.substr(22)}...`
        return value
    }
    return (
        <div className='Orders'>
            <div className='ordersContainer noboder'>
                <div className='muted'>
                    Name
                </div>
                <div className='muted'>
                    Date
                </div>
                <div className='muted'>
                    Amount
                </div>
                <div className='muted'>
                    Status
                </div>
                <div className='muted'>
                    Invoice
                </div>
            </div>
            {/* Iterating data above */}
            {data ? data.map((info,id)=>(
                <div className='ordersContainer' key={id}>
                    <div className='userRow'>
                        <div className='center'>
                            <img src={info.image} alt="user" />
                        </div>
                        <div className='centerX'>
                            <span>
                                {checkLenght(info.name)}
                            </span>
                        </div>
                    </div>
                    <div className='centerX muted'>
                        <span>
                            {info.date}
                        </span>
                    </div>
                    <div className='centerX'>
                        <span>
                            ${(info.amount).toLocaleString('en-US')}
                        </span>
                    </div>
                    <div className='centerX'>
                        <span className={info.status === "Paid" ? "green" : "red"}>
                            {info.status}
                        </span>
                    </div>
                    <div className='centerX'>
                        <img className='pr_05 pointer' src="/Icons/view.svg" alt="view" />
                        <span className='bold4 pointer font_14'>
                            View
                        </span>
                    </div>
                </div>
            ))
                
            :
                <div className='muted'>
                    No Order
                </div>
            }
        </div>
    )
}

export default Orders
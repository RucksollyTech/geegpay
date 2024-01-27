import React from 'react'

const SummaryData = () => {
    const data = [
        {
            id: 1,
            logo : "/Icons/icon11.svg",
            color : "green",
            title: "Total Order",
            value: "350",
        },
        {
            id: 2,
            logo : "/Icons/icon12.svg",
            color : "red",
            title: "Total Refund",
            value: "270",
        },
        {
            id: 3,
            logo : "/Icons/icon13.svg",
            color : "red",
            title: "Average Sales",
            value: "1567",
        },
        {
            id: 4,
            logo : "/Icons/icon14.svg",
            color : "green",
            title: "Total Income",
            value: "$350.000",
        }
    ]
    return data
}

export default SummaryData
import React from 'react';
import './CustomerReview.css';
import Chart from 'react-apexcharts';

const CustomerReview = () => {
    const data = {
        series: [
           {
            name: "Review",
            data: [10, 50, 30, 90, 40, 120, 100],
           },
        ],
        options: {
            chart: {
                type: "area",
                height: "auto",
            },
            fill: {
                colors: ["#fff"],
                type: "gradient",
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                curve: "smooth",
                colors: ["#ff929f"],
            },
            tooltip: {
                x: {
                    format: "dd/MM/yy HH:mm",
                },
            },
            grid: {
                show: false,
            },
            xaxis: {
                type: "datetime",
                categories: [
                    "2021-09-27T00:00:00.000Z",
                    "2021-09-28T01:30:00.000Z",
                    "2021-09-29T02:30:00.000Z",
                    "2021-09-30T03:30:00.000Z",
                    "2021-10-01T04:30:00.000Z",
                    "2021-10-02T05:30:00.000Z",
                    "2021-10-03T06:30:00.000Z",
                ],
            },
            yaxis: {
                show: false,
            },
            toolbar: {
                show: false,
            }
        },
    };


    return (
        <div className="CustomerReview">
            <Chart series={data.series} options={data.options} type='area'/>
        </div>
    )
}

export default CustomerReview;
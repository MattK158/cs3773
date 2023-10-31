import React, { useState } from "react";
import "./Card.css";
import { motion, AnimateSharedLayout } from "framer-motion";
import { CircularProgressbar } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
import {UilTimes} from "@iconscout/react-unicons";
import Chart from "react-apexcharts"

const Card = (props) => {
    const [expanded, setExpanded] = useState(false);


    return (
        <AnimateSharedLayout>
            {
                expanded ? <ExpandedCard param={props} setExpanded={() => setExpanded(false)}/> : 
                <CompactCard param = {props} setExpanded={() => setExpanded(true)}/>
            }

        </AnimateSharedLayout>
    )
}


// Compact Card
function CompactCard({param, setExpanded}) {
    const Png = param.png;
    return (
        <motion.div className="CompactCard"
        style={{
            background: param.color.background,
            boxShadow: param.color.boxShadow,
        }}
        onClick={setExpanded}
        layoutId='expandableCard'
        >
            <div className="radialBar">
                <CircularProgressbar value={param.barValue} text={`${param.barValue}%`} />
                <span>{param.title}</span>
            </div>
            <div className="detail">
                <Png/>
                <span>${param.value}</span>
                <span>Last 7 days</span>
            </div>
        </motion.div>
    )
}

// Expanded Card
function ExpandedCard({param, setExpanded}) {
    const data = {
        options: {
            chart: {
                type: "area",
                height: "auto",
            },

            dropShadow: {
                enabled: false,
                enabledOnSeries: undefined,
                top: 0,
                left: 0,
                blur: 3,
                color: '#000',
                opacity: 0.35
            },

            fill: {
                type: "gradient",
                colors: ["#fff"],
            },

            dataLabels: {
                enabled: false,
            },

            stroke: {
                colors: ["white"],
                curve: "smooth",
            },

            tooltip: {
                x: {
                    format: "dd/MM/yy HH:mm",
                },
            },

            grid: {
                show: true,
            },

            // find a way to make this dynamic based off of data being pulled from database
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
        },
    };
    return (
        <motion.div className="ExpandedCard" 
        style={{
            background: param.color.background, 
            boxShadow: param.color.boxShadow,
        }}
        layoutId='expandableCard'
        >
        <div style={{alignSelf: "flex-end", cursor: "pointer", color: "white"}}>
            <UilTimes onClick={setExpanded}
            />
        </div>
        <span>{param.title}</span>
        <div className="chartContainer">
            <Chart series={param.series} type='area' options={data.options}/>
        </div>
        <span>Last 7 days</span>
        </motion.div>
    )
}

export default Card;
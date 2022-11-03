import React from 'react';
import ChartBar from './ChartBar';
import './Chart.css';
const Chart = props => {
    const valueArray = props.dataPoints.map(dp => dp.value);

    const totalMax = Math.max(...valueArray);

    return <div className='chart'>
        {props.dataPoints.map(dp =>
            <ChartBar
                value={dp.value}
                maxValue={totalMax}
                label={dp.label}
                key={dp.label} />
        )}
    </div>
};
export default Chart;
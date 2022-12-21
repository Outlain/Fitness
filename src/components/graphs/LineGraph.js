import React from 'react';
import { Chart as ChartJS } from 'chart.js/auto';
import { Line } from 'react-chartjs-2';
export const iDoNotKnow = ChartJS
export const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            position: 'top'
        },
        title: {
            display: true,
            text: 'Chart.js Line Chart'
        }
    }
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const dataset1Data = [100, 200, 300, 400, 250, 600, 700];
const dataset2Data = [100, 120, 80, 100, 150, 120, 150];
const dataset3Data = [500, 400, 300, 200, 100, 50, 25];
const dataset4Data = [200, 300, 400, 500, 350, 700, 800];
const dataset5Data = [150, 147, 160, 130, 150, 134, 140];
const dataset6Data = [45, 45, 50, 41, 55, 45, 43];

export const data = {
    labels,
    datasets: [
        {
            label: 'Total Volume (R*S*W)',
            data: dataset1Data,
            borderColor:'rgba(88,99,223,1)',
            backgroundColor: 'rgba(88,99,223,0.2)',
            pointBackgroundColor: 'rgba(88,99,223,1)',
            pointRadius: 5,
            fill: true
        },
        {
            label: 'Max Weight (any excercise)',
            data: dataset2Data,
            borderColor: '#36a2eb',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
            pointBackgroundColor: '#36a2eb',
            pointRadius: 5
        },
        {
            label: 'Total Time',
            data: dataset3Data
            ,
            borderColor: '#4bc0c0',
            backgroundColor: 'rgba(75, 192, 192, 0.5)',
            pointBackgroundColor: '#4bc0c0',
            pointRadius: 5
        },
        {
            label: 'Total Calories',
            data: dataset4Data,
            borderColor: '#fcc468',
            backgroundColor: 'rgba(252, 196, 104, 0.5)',
            pointBackgroundColor: '#fcc468',
            pointRadius: 5
        },
        {
            label: 'Average Workout HR',
            data: dataset5Data,
            borderColor: '#2cc468',
            backgroundColor: 'rgba(252, 196, 104, 0.5)',
            pointBackgroundColor: '#2cc468',
            pointRadius: 5
        },
        {
            label: 'Average Daily HR',
            data: dataset6Data,
            borderColor: 'rgba(225,225,225,1)',
            backgroundColor: 'rgba(252, 196, 104, 0.5)',
            pointBackgroundColor: 'rgba(225,225,225,1)',
            pointRadius: 5
        }
    ]
};

export function MyLineChart() {
    return <Line options={options} data={data} height="100%" />;
}

export default MyLineChart;

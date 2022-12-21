import React from 'react';
import { Chart as ChartJS } from 'chart.js/auto';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
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

export const data = {
    labels,
    datasets: [
        {
            label: 'Total Volume (R*S*W)',
            data: labels.map(() => faker.datatype.number({ min: 60, max: 80 })),
            borderColor: 'rgba(88,99,223,1)',
            backgroundColor: 'rgba(88,99,223,0.2)',
            pointBackgroundColor: 'rgba(88,99,223,1)',
            pointRadius: 5,
            fill: true
        },
        {
            label: 'Max Weight (any excercise)',
            data: labels.map(() => faker.datatype.number({ min: 16, max: 45 })),
            borderColor: '#36a2eb',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
            pointBackgroundColor: '#36a2eb',
            pointRadius: 5
        },
        {
            label: 'Total Time',
            data: labels.map(() => faker.datatype.number({ min: 45, max: 60 })),
            borderColor: '#4bc0c0',
            backgroundColor: 'rgba(75, 192, 192, 0.5)',
            pointBackgroundColor: '#4bc0c0',
            pointRadius: 5
        },
        {
            label: 'Total Calories',
            data: labels.map(() => faker.datatype.number({ min: 70, max: 120 })),
            borderColor: '#fcc468',
            backgroundColor: 'rgba(252, 196, 104, 0.5)',
            pointBackgroundColor: '#fcc468',
            pointRadius: 5
        },
        {
            label: 'Average Workout HR',
            data: labels.map(() => faker.datatype.number({ min: 130, max: 155 })),
            borderColor: '#2cc468',
            backgroundColor: 'rgba(252, 196, 104, 0.5)',
            pointBackgroundColor: '#2cc468',
            pointRadius: 5
        },
        {
            label: 'Average Daily HR',
            data: labels.map(() => faker.datatype.number({ min: 43, max: 65 })),
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

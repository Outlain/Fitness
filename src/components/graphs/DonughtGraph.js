import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);
export const options = {
  responsive: true,
  maintainAspectRatio: false
}
export const data = {
  labels: ['Total Gym Days', 'Total Non gym Days' ],
  datasets: [
    {
      label: 'Dataset 1',
      data: [30, 2],
      backgroundColor: [
        'rgba(88,99,223,0.2)',
        'rgba(54, 162, 235, 0.2)',
      ],
      borderColor: [
        'rgba(88,99,223,1)',
        'rgba(54, 162, 235, 1)',
      ],
      borderWidth: 1,
    }
  ],
};

export default function App() {
  return <Doughnut options={options} data={data} />;
}

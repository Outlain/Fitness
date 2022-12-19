import React from 'react';

class LineGraph extends React.Component {
  componentDidMount() {
    // Get the canvas element and create a 2D context for it
    var canvas = document.getElementById('myCanvasSquat');
    var ctx = canvas.getContext('2d');

    // Define the data for the line graph
    var data = [
      { x: new Date('2022-01-01'), y: 10 },
      { x: new Date('2022-01-02'), y: 20 },
      { x: new Date('2022-01-03'), y: 30 },
      { x: new Date('2022-01-04'), y: 20 },
      { x: new Date('2022-01-05'), y: 25 }
    ];

    // Determine the minimum and maximum values for the x-axis and y-axis
    var xMin = data[0].x;
    var xMax = data[data.length - 1].x;
    var yMin = data[0].y;
    var yMax = data[0].y;

    for (let i = 1; i < data.length; i++) {
      if (data[i].x < xMin) xMin = data[i].x;
      if (data[i].x > xMax) xMax = data[i].x;
      if (data[i].y < yMin) yMin = data[i].y;
      if (data[i].y > yMax) yMax = data[i].y;
    }

    // Calculate the scaling factor for the x-axis and y-axis
    var xScale = canvas.width / (xMax - xMin);
    var yScale = canvas.height / (yMax - yMin);

    // Iterate through the data array and draw a line connecting the data points
    ctx.beginPath();
    ctx.moveTo(
      (data[0].x - xMin) * xScale,
      canvas.height - (data[0].y - yMin) * yScale
    );
    for (let i = 1; i <data.length; i++) {
      ctx.lineTo(
        (data[i].x - xMin) * xScale,
        canvas.height - (data[i].y - yMin) * yScale
      );
    }

    // Set the stroke style and line width for the line graph
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 2;

    // Stroke the line onto the canvas
    ctx.stroke();

    // Add axis labels and a legend to the graph, if desired
    ctx.font = '14px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Date', canvas.width / 2, canvas.height + 20);
    ctx.save();
    ctx.rotate(-Math.PI / 2);
    ctx.textAlign = 'center';
    ctx.fillText('Value', -canvas.height / 2, -20);
    ctx.restore();
    }
    
    render() {
    return (
    <canvas id="myCanvasSquat" width={500} height={300} />
    );
    }
    }
    
    export default LineGraph;

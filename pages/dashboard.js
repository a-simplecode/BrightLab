import Head from 'next/head';
import { Line,Bar } from "react-chartjs-2";
import { RenderRows } from "../components/container";
import Moment from 'moment';

export default function Dashboard() {
  const usersRegistered = {
    labels: [
      Moment().subtract(6,'days').format("DD/MM/YYYY"), 
      Moment().subtract(5,'days').format("DD/MM/YYYY"), 
      Moment().subtract(4,'days').format("DD/MM/YYYY"), 
      Moment().subtract(3,'days').format("DD/MM/YYYY"), 
      Moment().subtract(2,'days').format("DD/MM/YYYY"), 
      Moment().subtract(1,'days').format("DD/MM/YYYY"), 
      Moment().format("DD/MM/YYYY"), 
    ],
    datasets: [
      {
        label: 'Users',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(0, 71, 237,0.4)',
        borderColor: 'rgba(0, 71, 237,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(0, 71, 237,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(0, 71, 237,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [65, 59, 80, 81, 56, 100, 111]
      }
    ]
  };

  const weeklySales = {
    labels: [
      Moment().subtract(6,'days').format("DD/MM/YYYY"), 
      Moment().subtract(5,'days').format("DD/MM/YYYY"), 
      Moment().subtract(4,'days').format("DD/MM/YYYY"), 
      Moment().subtract(3,'days').format("DD/MM/YYYY"), 
      Moment().subtract(2,'days').format("DD/MM/YYYY"), 
      Moment().subtract(1,'days').format("DD/MM/YYYY"), 
      Moment().format("DD/MM/YYYY"), 
    ],
    datasets: [
      {
        label: 'Revenue',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(5, 151, 255,0.4)',
        borderColor: 'rgba(5, 151, 255,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(5, 151, 255,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(5, 151, 255,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [300, 500, 350, 600, 1000, 450, 800]
      },
      {
        label: 'Net Income',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(250, 19, 2,0.8)',
        borderColor: 'rgba(250, 19, 2,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(250, 19, 2,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(250, 19, 2,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [100, 150, 200, 500, 800, 100, 600]
      },
      {
        label: 'Profit margin',
        type:'line',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(23, 184, 20,0.8)',
        borderColor: 'rgba(23, 184, 20,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(23, 184, 20,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(23, 184, 20,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [300, 250, 400, 800, 600, 300, 200]
      }
    ]
  };
  
  return (<>
      <Head>
        <title>Dashboard</title>
      </Head>
      <RenderRows 
      left={<>
      <Line data={usersRegistered}/>
      <div style={{color:"rgb(0, 71, 237)",textAlign:"center", fontFamily: "ui-monospace",fontSize:"2em"}}>Users Registered</div>

      </>} 
      right={<>
      <Bar data={weeklySales}/>
      <div style={{color:"rgb(250, 19, 2)",textAlign:"center"}}>
      <div style={{fontSize:"2em"}}>Sales Past Week</div>
      <span>in USD</span>
      </div>
      </>}
      />
    </>
  )
}
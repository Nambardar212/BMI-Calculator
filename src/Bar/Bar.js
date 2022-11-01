import React from "react";
// import {ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Legend, Tooltip
// ,Label} from 'recharts';
// import { Line } from 'react-chartjs-2';
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
//   Filler,
//   Line
// } from "chart.js";
// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
//   Filler
// );
// import chartjs from 'chart.js'
// chartjs(
//     Line
// )
// const data = [
//     {
//         BMI: '18.5',
//         Date: '11/10/2020'
//     },
//     {
//         BMI: '20.5',
//         Date: '12/10/2020'
//     },
//     {
//         BMI: '15.5',
//         Date: '20/10/2020'
//     },
//     {
//         BMI: '25.5',
//         Date: '30/10/2020'
//     },
//     {
//         BMI: '17.5',
//         Date: '31/10/2020'
//     },
// ]


const Bar = ({labelData}) => {

 

  










    // const data = canvas => {
    //     const ctx = canvas.getContext('2d');
    //     const gradient = ctx.createLinearGradient(63, 81, 181, 700);
    //     gradient.addColorStop(0, '#929dd9');
    //     gradient.addColorStop(1, '#172b4d');
    
    //     return {
    //       labels: labelData.date,
    //       datasets: [
    //         {
    //           label: 'BMI',
    //           data: labelData.bmiData,
    //           backgroundColor: gradient,
    //           borderColor: '#3F51B5',
    //           pointRadius: 6,
    //           pointHoverRadius: 8,
    //           pointHoverBorderColor: 'white',
    //           pointHoverBorderWidth: 2
    //         }
    //       ]
    //     };
    //   };
    // const Data = [{}]
    // const data = () => {
    //     const date = labelData.map((obj) => obj.date);
    //     const bmi = labelData.map((obj) => obj.bmi);
    //     Data[{date,bmi}]
    // }
    // data();
    //  let d = []
    //  let b = []
    // for(let i = 0; i < labelData.length; i++) {
    //     d[i] = labelData.date[i];
    //     b[i] = labelData.bmi[i];
    // }
    // console.log(d);
    // console.log(labelData.bmi);
  //   const chart = () => {
  //     return {
  //     labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
  //     datasets: [
  //       {
  //         label: "Level of Temperature",
  //         data: [32, 53, 32, 54, 69],
  //         backgroundColor: [`rgb(75, 192, 192, 0.6)`],
  //         borderWidth: 4,
  //       },
  //     ],
  //   };
  // };
    console.log(labelData)
    return (
         <>
           {/* <ResponsiveContainer width='100%' aspect={3}>
             <LineChart data={labelData.bmis}  >
             {
                 labelData.dates.map((date, idx) => (
                  <XAxis key={idx} dataKey={date} interval={'preserveStartEnd'}>
                    <Label  value="Date" offset={-5.5} position="insideBottom" fontSize='18' fontColor= 'white'  />
               </XAxis>
                 ))
             }
            
               
               <YAxis  label={{ value: 'BMI', angle: -90, position: 'insideLeft', fontSize: '18', fontColor: 'white'}}></YAxis>
               <Tooltip></Tooltip>
               <Legend></Legend>
               {
                  labelData.bmis.map((bmi, idx) => (
                    
                    <Line key={idx} type='monotone' name={bmi} strokeWidth={2} dataKey={bmi} activeDot={{r:8}}></Line>
                  
                  ))
               }
              
              
           
             </LineChart>
          </ResponsiveContainer> 
           */}
          
          
         {/* <Line data={labelData}></Line> */}
      
               
        </>
    ) 
}

export default Bar;
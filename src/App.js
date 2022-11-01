import React, { useState, useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import './App.css';
import BmiForm from './BmiForm/Bmiform';
import Bar from './Bar/Bar';
import Info from './Info/Info';
import { v4 as uuidv4 } from 'uuid';
import {getLocalData} from './LocalStorage/LocalStorage';

 

function App() {

  const [state, setState] = useState(getLocalData('state'))
  const [data, setData] = useState({
           labels: [],
          datasets: [
            {
              label: 'BMI',
              data: [],
              backgroundColor: 'red',
              borderColor: '#3F51B5',
              pointRadius: 6,
              pointHoverRadius: 8,
              pointHoverBorderColor: 'white',
              pointHoverBorderWidth: 2
            }
          ]
  })
  
  const handleBmiForm = (bmiValue) => {
      let heightInM = bmiValue.height / 100;
      let bmi = (bmiValue.weight / (heightInM * heightInM)).toFixed(2)
      setState(newState  => [
        ...newState ,
        { weight: bmiValue.weight, 
          height: bmiValue.height,
          bmi:  bmi,
          date: bmiValue.date,
          id: uuidv4()
        },
      ])
  }

  const handleDelete = (id) => {
    // storeData('lastState', state)
    let newState = state.filter(i => {
      return i.id !== id;
    });
    setState(newState);
  }
  
  
  useEffect(()=> {
    localStorage.setItem("state", JSON.stringify(state));
    // storeData('data', state)
    var date = []
    state.map((obj) => {
      date.push(obj.date)
    });
    var bmi = []
    state.map((obj) => {
      bmi.push(obj.bmi)
    });
    // let newData = {date, bmi}
    setData({
      labels: date,
      datasets: [
        {
          label: 'BMI',
          data: bmi,
          backgroundColor: 'red',
          borderColor: '#3F51B5',
          pointRadius: 6,
          pointHoverRadius: 8,
          pointHoverBorderColor: 'white',
          pointHoverBorderWidth: 2
        }
      ]
    })
  },[state])

  return (
      <div className='container'>
         <div className="row center">
           <h1 className="white-text">BMI Tracker</h1>
         </div>
         <div className="row">
          <div className="col m12 s12">
             <BmiForm handleBmiForm = {handleBmiForm}></BmiForm>
             <Bar labelData={data}></Bar>
             <div>
              <div className="row center">
                <h4 className="white-text">7 Day Data</h4>
              </div>
              <div className="data-container row">
                {
                   state.length !== 0 ? (
                    <>
                      {state.map((info) => (
                        <Info
                         key={info.id}
                         id={info.id}
                         weight={info.weight}
                         height={info.height}
                         date={info.date}
                         bmi={info.bmi}
                         deleteCard={handleDelete}
                        />
                      ))}
                      </>
                   ) : (
                    <div className="center white-text">No log found</div>
                   )
                }
              </div>
             </div>
             {/* {
              state.length !== 0 ? (
                <div className="center">
                  <button className="calculate-btn">
                    Undo
                  </button>
                </div>
              ) : (
                ''
              )
             } */}
          </div>
         </div>
      </div>
  );
}

export default App;

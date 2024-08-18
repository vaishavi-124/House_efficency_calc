
// // import { useState } from 'react';
// // import './Calc.css';

// // function Header() {
// //   return (
// //     <header>
// //       <div className="container">
// //         <div className="head-anicon">
// //           <h1>ECalculator</h1>
// //         </div>
       
// //       </div>
// //     </header>
// //   );
// // }

// // function Calc() {
// //   const [applianceCounter, setApplianceCounter] = useState(1);
// //   const [results, setResults] = useState({ perDay: 0, perMonth: 0, perYear: 0, costPerMonth: 0 }); // Added costPerMonth in the state
// //   const [inputs, setInputs] = useState([{ appliance: '', power: '', hours: '' }]);
  
// //   // Declared totalCostPerMonth
// //   let totalCostPerMonth = 0;

// //   const addAppliance = () => {
// //     setApplianceCounter(prevCounter => prevCounter + 1);
// //     setInputs(prevInputs => [...prevInputs, { appliance: '', power: '', hours: '' }]);
// //   };

// //   const removeAppliance = () => {
// //     if (applianceCounter > 1) {
// //       setApplianceCounter(prevCounter => prevCounter - 1);
// //       setInputs(prevInputs => prevInputs.slice(0, -1));
// //     }
// //   };

// //   const handleInputChange = (index, event) => {
// //     const { name, value } = event.target;
// //     const newInputs = [...inputs];
// //     newInputs[index][name] = value;
// //     setInputs(newInputs);
// //   };

// //   const calculate = () => {
// //     let totalEnergyPerDay = 0;
// //     let totalEnergyPerMonth = 0;
// //     let totalEnergyPerYear = 0;

// //     inputs.forEach(({ power, hours }) => {
// //       const powerFloat = parseFloat(power);
// //       const hoursFloat = parseFloat(hours);
      
// //       const energyPerDay = (powerFloat * hoursFloat) / 1000;
// //       const energyPerMonth = energyPerDay * 30;
// //       const energyPerYear = energyPerMonth * 12;
      
// //       totalEnergyPerDay += energyPerDay;
// //       totalEnergyPerMonth += energyPerMonth;
// //       totalEnergyPerYear += energyPerYear;
     
// //       const costPerKWh = 7;
// //       const costPerMonth = energyPerMonth * costPerKWh;
// //       totalCostPerMonth += costPerMonth;
// //     });

// //     setResults({
// //       perDay: totalEnergyPerDay.toFixed(2),
// //       perMonth: totalEnergyPerMonth.toFixed(2),
// //       perYear: totalEnergyPerYear.toFixed(2),
// //       costPerMonth: totalCostPerMonth.toFixed(2)
// //     });
// //   };




// //   return (
    
// //     <div className="app-container">
// //       <div>
// //       <Header />
     
// //     </div>
     
      
// //     <div className="calculator">
// //       <h2>Electricity Bill Calculator</h2>
// //       <div id="appliances">
// //         {inputs.map((input, index) => (
// //           <div key={index} className="equipment">
// //             <div>
// //               <label htmlFor={`appliance${index + 1}`}>Select Appliance:</label>
// //               <select
// //                 className="appliance"
// //                 id={`appliance${index + 1}`}
// //                 name="appliance"
// //                 value={input.appliance}
// //                 onChange={e => handleInputChange(index, e)}
// //               >
// //                 <option value="fridge">Fridge</option>
// //                 <option value="tv">TV</option>
// //                 <option value="washing-machine">Washing Machine</option>
// //                 <option value="air-conditioner">Air Conditioner</option>
// //                 <option value="computer">Computer</option>
// //                 <option value="lights">Lights</option>
// //                 <option value="microwave">Microwave</option>
// //                 <option value="oven">Oven</option>
// //               </select>
// //             </div>
// //             <div>
// //               <label htmlFor={`power${index + 1}`}>Power Consumption (Watts):</label>
// //               <input
// //                 type="number"
// //                 className="power"
// //                 id={`power${index + 1}`}
// //                 name="power"
// //                 min="1"
// //                 step="1"
// //                 value={input.power}
// //                 onChange={e => handleInputChange(index, e)}
// //               />
// //             </div>
// //             <div>
// //               <label htmlFor={`hours${index + 1}`}>Hours of Use per Day:</label>
// //               <input
// //                 type="number"
// //                 className="hours"
// //                 id={`hours${index + 1}`}
// //                 name="hours"
// //                 min="0"
// //                 step="0.5"
// //                 value={input.hours}
// //                 onChange={e => handleInputChange(index, e)}
// //               />
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //       <button onClick={addAppliance}>Add Appliance</button>
// //       <button onClick={removeAppliance}>Remove Appliance</button>
// //       <button onClick={calculate}>Calculate</button>
// //       <div className="result" id="result">
// //         <h3>Energy Consumption:</h3>
// //         <p>Total Energy consumed per day: {results.perDay} kWh/day</p>
// //         <p>Total Energy consumed per month: {results.perMonth} kWh/month</p>
// //         <p>Total Energy consumed per year: {results.perYear} kWh/year</p>
// //         <br />
// //         <p>Total cost  per month: {results.costPerMonth} </p>
// //       </div>
// //     </div>
    
    
// //     </div>
// //   );
// // }



// // export default Calc;



// import { useState } from 'react';
// import './Calc.css';

// function Header() {
//   return (
//     <header>
//       <div className="container">
//         <div className="head-anicon">
//           <h1>ECalculator</h1>
//         </div>
//       </div>
//     </header>
//   );
// }

// function Calc() {
//   const [applianceCounter, setApplianceCounter] = useState(1);
//   const [results, setResults] = useState({ perDay: 0, perMonth: 0, perYear: 0, costPerMonth: 0 });
//   const [inputs, setInputs] = useState([{ appliance: '', power: '', hours: '' }]);
//   let totalCostPerMonth = 0;

//   const addAppliance = () => {
//     setApplianceCounter(prevCounter => prevCounter + 1);
//     setInputs(prevInputs => [...prevInputs, { appliance: '', power: '', hours: '' }]);
//   };

//   const removeAppliance = (indexToRemove) => {
//     if (applianceCounter > 1) {
//       setApplianceCounter(prevCounter => prevCounter - 1);
//       setInputs(prevInputs => prevInputs.filter((_, index) => index !== indexToRemove));
//     }
//   };

//   const handleInputChange = (index, event) => {
//     const { name, value } = event.target;
//     const newInputs = [...inputs];
//     newInputs[index][name] = value;
//     setInputs(newInputs);
//   };

//   const calculate = () => {
//     let totalEnergyPerDay = 0;
//     let totalEnergyPerMonth = 0;
//     let totalEnergyPerYear = 0;

//     inputs.forEach(({ power, hours }) => {
//       const powerFloat = parseFloat(power);
//       const hoursFloat = parseFloat(hours);
      
//       const energyPerDay = (powerFloat * hoursFloat) / 1000;
//       const energyPerMonth = energyPerDay * 30;
//       const energyPerYear = energyPerMonth * 12;
      
//       totalEnergyPerDay += energyPerDay;
//       totalEnergyPerMonth += energyPerMonth;
//       totalEnergyPerYear += energyPerYear;
     
//       const costPerKWh = 7;
//       const costPerMonth = energyPerMonth * costPerKWh;
//       totalCostPerMonth += costPerMonth;
//     });

//     setResults({
//       perDay: totalEnergyPerDay.toFixed(2),
//       perMonth: totalEnergyPerMonth.toFixed(2),
//       perYear: totalEnergyPerYear.toFixed(2),
//       costPerMonth: totalCostPerMonth.toFixed(2)
//     });
//   };

//   return (
//     <div className="app-container">
//       <div>
//         <Header />
//       </div>
      
//       <div className="calculator">
//         <h2>Electricity Bill Calculator</h2>
//         <div id="appliances">
//           {inputs.map((input, index) => (
//             <div key={index} className="equipment">
//               <div>
//                 <label htmlFor={`appliance${index + 1}`}>Select Appliance:</label>
//                 <select
//                   className="appliance"
//                   id={`appliance${index + 1}`}
//                   name="appliance"
//                   value={input.appliance}
//                   onChange={e => handleInputChange(index, e)}
//                 >
//                   <option value="fridge">Fridge</option>
//                   <option value="tv">TV</option>
//                   <option value="washing-machine">Washing Machine</option>
//                   <option value="air-conditioner">Air Conditioner</option>
//                   <option value="computer">Computer</option>
//                   <option value="lights">Lights</option>
//                   <option value="microwave">Microwave</option>
//                   <option value="oven">Oven</option>
//                 </select>
//               </div>
//               <div>
//                 <label htmlFor={`power${index + 1}`}>Power Consumption (Watts):</label>
//                 <input
//                   type="number"
//                   className="power"
//                   id={`power${index + 1}`}
//                   name="power"
//                   min="1"
//                   step="1"
//                   value={input.power}
//                   onChange={e => handleInputChange(index, e)}
//                 />
//               </div>
//               <div>
//                 <label htmlFor={`hours${index + 1}`}>Hours of Use per Day:</label>
//                 <input
//                   type="number"
//                   className="hours"
//                   id={`hours${index + 1}`}
//                   name="hours"
//                   min="0"
//                   step="0.5"
//                   value={input.hours}
//                   onChange={e => handleInputChange(index, e)}
//                 />
//               </div>
//               <button onClick={() => removeAppliance(index)}>Remove </button>
//             </div>
//           ))}
//         </div>
//         <button onClick={addAppliance}>Add Appliance</button>
//         <button onClick={calculate}>Calculate</button>
//         <div className="result" id="result">
//           <h3>Energy Consumption:</h3>
//           <p>Total Energy consumed per day: {results.perDay} kWh/day</p>
//           <p>Total Energy consumed per month: {results.perMonth} kWh/month</p>
//           <p>Total Energy consumed per year: {results.perYear} kWh/year</p>
//           <br />
//           <p>Total cost  per month: {results.costPerMonth} </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Calc;

import { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import './Calc.css';

function Header() {
  return (
    <header>
      <div id='calc_s' className="container">
        <div className="head-anicon">
          <h1>ECalculator</h1>
        </div>
      </div>
    </header>
  );
}

function Calc() {
  const [applianceCounter, setApplianceCounter] = useState(1);
  const [results, setResults] = useState({ perDay: 0, perMonth: 0, perYear: 0, costPerMonth: 0 });
  const [inputs, setInputs] = useState([{ appliance: '', power: '', hours: '' }]);
  let totalCostPerMonth = 0;

  const addAppliance = () => {
    setApplianceCounter(prevCounter => prevCounter + 1);
    setInputs(prevInputs => [...prevInputs, { appliance: '', power: '', hours: '' }]);
  };

  const removeAppliance = (indexToRemove) => {
    if (applianceCounter > 1) {
      setApplianceCounter(prevCounter => prevCounter - 1);
      setInputs(prevInputs => prevInputs.filter((_, index) => index !== indexToRemove));
    }
  };

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const newInputs = [...inputs];
    newInputs[index][name] = value;
    setInputs(newInputs);
  };

  const calculate = () => {
    let totalEnergyPerDay = 0;
    let totalEnergyPerMonth = 0;
    let totalEnergyPerYear = 0;

    inputs.forEach(({ power, hours }) => {
      const powerFloat = parseFloat(power);
      const hoursFloat = parseFloat(hours);
      
      const energyPerDay = (powerFloat * hoursFloat) / 1000;
      const energyPerMonth = energyPerDay * 30;
      const energyPerYear = energyPerMonth * 12;
      
      totalEnergyPerDay += energyPerDay;
      totalEnergyPerMonth += energyPerMonth;
      totalEnergyPerYear += energyPerYear;
     
      const costPerKWh = 7;
      const costPerMonth = energyPerMonth * costPerKWh;
      totalCostPerMonth += costPerMonth;
    });

    setResults({
      perDay: totalEnergyPerDay.toFixed(2),
      perMonth: totalEnergyPerMonth.toFixed(2),
      perYear: totalEnergyPerYear.toFixed(2),
      costPerMonth: totalCostPerMonth.toFixed(2)
    });
  };

  // Chart data
  const chartData = {
    labels: ['Per Day', 'Per Month', 'Per Year'],
    datasets: [
      {
        label: 'Energy Consumption (kWh)',
        backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)'],
        borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
        borderWidth: 1,
        hoverBackgroundColor: ['rgba(255, 99, 132, 0.4)', 'rgba(54, 162, 235, 0.4)', 'rgba(255, 206, 86, 0.4)'],
        hoverBorderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
        data: [results.perDay, results.perMonth, results.perYear],
      },
    ],
  };
  

  return (
    <div className="app-container">
      <div>
        <Header />
      </div>
      
      <div className="calculator">
        <h2>Electricity Bill Calculator</h2>
        <div id="appliances">
          {inputs.map((input, index) => (
            <div key={index} className="equipment">
              <div>
                <label htmlFor={`appliance${index + 1}`}>Select Appliance:</label>
                <select
                  className="appliance"
                  id={`appliance${index + 1}`}
                  name="appliance"
                  value={input.appliance}
                  onChange={e => handleInputChange(index, e)}
                >
                  <option value="fridge">Fridge</option>
                  <option value="tv">TV</option>
                  <option value="washing-machine">Washing Machine</option>
                  <option value="air-conditioner">Air Conditioner</option>
                  <option value="computer">Computer</option>
                  <option value="lights">Lights</option>
                  <option value="microwave">Microwave</option>
                  <option value="oven">Oven</option>
                </select>
              </div>
              <div>
                <label htmlFor={`power${index + 1}`}>Power Consumption (Watts):</label>
                <input
                  type="number"
                  className="power"
                  id={`power${index + 1}`}
                  name="power"
                  min="1"
                  step="1"
                  value={input.power}
                  onChange={e => handleInputChange(index, e)}
                />
              </div>
              <div>
                <label htmlFor={`hours${index + 1}`}>Hours of Use per Day:</label>
                <input
                  type="number"
                  className="hours"
                  id={`hours${index + 1}`}
                  name="hours"
                  min="0"
                  step="0.5"
                  value={input.hours}
                  onChange={e => handleInputChange(index, e)}
                />
              </div>
              <button onClick={() => removeAppliance(index)}>Remove </button>
            </div>
          ))}
        </div>
        <button onClick={addAppliance}>Add Appliance</button>
        <button onClick={calculate}>Calculate</button>
        <div className="result" id="result">
          <h3>Energy Consumption:</h3>
          <p>Total Energy consumed per day: {results.perDay} kWh/day</p>
          <p>Total Energy consumed per month: {results.perMonth} kWh/month</p>
          <p>Total Energy consumed per year: {results.perYear} kWh/year</p>
          <br />
          <p>Total cost  per month: {results.costPerMonth} </p>
        </div>
      </div>

      {/* Chart */}
      {/* <div className="chart-container">
        <Bar
          data={chartData}
          options={{
            maintainAspectRatio: false,
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero: true,
                },
              }],
            },
          }}
        />
      </div> */}
    </div>
  );
}

export default Calc;


import { useState } from 'react'

import './App.css'
import axios from 'axios';
function App() {
  const [services, setServices] = useState(0)
  const [appointment, setappointment] = useState(0)
  const [waiting, setwaiting] = useState(0)
  const [quality, setquality] = useState(0)
  const [cleaning, setcleaning] = useState(0)
  const [Communication, setCommunication] = useState(0)
  const [workers, setworkers] = useState(0)
  const [equipment, setequipment] = useState(0)

  const handleSubmit = async(e) => {
    e.preventDefault();
    const response = await axios.post('http://127.0.0.1:5000/patient-rating',{
      services,
      appointment,
      waiting,
      quality,
      cleaning,
      Communication,
      workers,
      equipment 
    })
    console.log(response);
  }
  

  return (
    <>
      <div>
        <label htmlFor="lab_services">Lab Services</label>
        <input type="number" id='lab_services' name='lab_services' placeholder='Enter Lab Service' value={services} onChange={(e) => setServices(e.target.value)} />

        <label htmlFor="lab_services">appointment</label>
        <input type="number" id='lab_services' name='lab_services' placeholder='Enter appointment' value={appointment} onChange={(e) => setappointment(e.target.value)}  />

        <label htmlFor="lab_services">waiting</label>
        <input type="number" id='lab_services' name='lab_services' placeholder='Enter waiting' value={waiting} onChange={(e) => setwaiting(e.target.value)}  />

        <label htmlFor="lab_services">quality</label>
        <input type="number" id='lab_services' name='lab_services' placeholder='Enter quality' value={quality} onChange={(e) => setquality(e.target.value)}  />

        <label htmlFor="lab_services">cleaning</label>
        <input type="number" id='lab_services' name='lab_services' placeholder='Enter cleaning' value={cleaning} onChange={(e) => setcleaning(e.target.value)}  />

        <label htmlFor="lab_services">Communication</label>
        <input type="number" id='lab_services' name='lab_services' placeholder='Enter Communication' value={Communication} onChange={(e) => setCommunication(e.target.value)}  />

        <label htmlFor="lab_services">workers</label>
        <input type="number" id='lab_services' name='lab_services' placeholder='Enter workers' value={workers} onChange={(e) => setworkers(e.target.value)}  />

        <label htmlFor="lab_services">equipment</label>
        <input type="number" id='lab_services' name='lab_services' placeholder='Enter equipment' value={equipment} onChange={(e) => setequipment(e.target.value)}  />
        <button onClick={handleSubmit}>Submit</button>
      </div>
      
    </>
  );
}

export default App;
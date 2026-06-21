import { useState, useEffect } from 'react'
import {database} from '../../firebase'

import {ref, onValue} from 'firebase/database'

const Dashboard = () => {
  
    //const [state , useState] = useState(0)

    const [sensorData, setSensorData] = useState({
        Temperature : 0,
        Humidity : 0,
        Gas : 0,

    })

    useEffect(() => {

        const sensorRef = ref(database,"SensorData");


        onValue( sensorRef,(snapshot) =>{
            const data = snapshot.val();

            if (data) {
                setSensorData(data);
            }
        });

    }, []);

    return (
    <>
  <div className="container">
    <h1>Sensor Data Fetching</h1>

    <div className="cards">
        <div className="data">
            <h3>Temperature</h3>
            <p>{sensorData.Temperature} </p>
        </div>

        <div className="data">
            <h3>Humidity</h3>
            <p>{sensorData.Humidity}</p>
        </div>

        <div className="data">
            <h3>Gas</h3>
            <p>{sensorData.Gas}</p>
        </div>
    </div>
</div>


    </>
  )
}

export default Dashboard

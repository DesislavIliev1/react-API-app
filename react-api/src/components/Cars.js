// import { Button, EditableText } from "@blueprintjs/core"
import { useEffect, useState } from "react";
import  axios  from 'axios';
import {useNavigate} from 'react-router-dom';


function Cars() {
  const [cars, setCars] = useState([]);
  const [user_id, setUser_id] = useState("");
  const [model, setModel] = useState("");
  const [brand, setBrand] = useState("");
  const [year, setYear] = useState("");
  
//   const [carData, setCarData] = useState({user_id:'', model: '', brand:'', year:''})
//   const handleInput = (e) =>{
//     const {name , value} = e.target;
//     setCarData({...carData,[name]:value})
  
  

  useEffect(() => {

    const fetchData = async () =>{
       

        const url = 'http://127.0.0.1:8000/api/getAllCars'

        try{
            const response = await fetch(url);
            const result = await response.json();

            setCars(result);
            console.log(result);

        }catch(error){
            console.log(error);
        }
    }

     fetchData();
  }, []);



 

const addCar = async () => {

    try{
  await axios.post("http://127.0.0.1:8000/api/addCar", { user_id, brand, model, year});
  

  setUser_id("");
  setBrand("");
  setModel("");
  setYear("");
 

  const response = await axios.get("http://127.0.0.1:8000/api/getAllCars");
  setCars(response.data);

    }catch(error){
        console.log(error.response.data);
    }
  } 

 const navigate = useNavigate();

  async function getCarInfo(carId) {
      
    try {
       const response = await axios.get(`http://127.0.0.1:8000/api/getCarById/${carId}`);
       const carInfo = response.data;
       console.log(carInfo);
       // redirect to new page with car info
       navigate(`/carInfo/${carId}`);
    } catch (error) {
       console.log(error);
    }
 }

  

  
 

  




        

  return (
    <div>
        <h1>
            {cars.data !=undefined &&  cars.data?.map((car)=>{
                return <div key={car.id}>{car.brand} {car.model} <button className='button-submit' onClick={() => getCarInfo(car.id)}>Info</button></div>
            })} </h1>
 
        <div className="data" >
        <label>
            User_id:
            <input type="text" value={user_id} onChange={e => setUser_id(e.target.value)}  />
        </label>
        <br />
        <label>
            brand:
            <input type="text" value={brand} onChange={e => setBrand(e.target.value)} />
        </label>
        <br />
        <label>
            Model:
            <input type="text" value={model} onChange={e => setModel(e.target.value)} />
        </label>
        <br />
        <label>
        Year:
            <input type="text" value={year} onChange={e => setYear(e.target.value)} />
        </label>
        <br />
        <button className='button-submit' onClick={addCar} >Add</button>
        </div>
    </div>
  )

}

export default Cars;

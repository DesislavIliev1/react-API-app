import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function CarInfo() {
    const [cars, setCars] = useState([]);
    const { id } = useParams();
    
    useEffect(() => {
        const fetchData = async () => {
            const url = 'http://127.0.0.1:8000/api/getCarById/' + id + '/';
            try {
                const response = await fetch(url);
                const result = await response.json();

                setCars(result);

                console.log(result);
            }
            catch(error){
                console.log(error);
            }
        }
        fetchData();
    },[]);

    return(
        <div>
            <h1>Car Info</h1>
            
                    { cars.data !==undefined && cars.data.map((car) => {
                    return <div key={car.id}>
                                <h1>Brand: {car.brand}</h1>
                                <h1>Model: {car.model}</h1>
                                <h1>Year: {car.year}</h1>
                            </div>
                    })}
               
            
        </div>
    );
}

export default CarInfo;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router';
import './App.css';

function Countries() {
    const [list , setList] = useState({});
    const[errors , setErros] = useState('')
    const location = useLocation()

  useEffect(() => {
   let pathname = location.pathname
    let country = pathname.split('/')[2]
    fetchCountry(country)
  });
 
   const fetchCountry = async(name) =>{
    try{
        const response = await axios.get(`https://restcountries.com/v3.1/nam/${name}`);
        const data = await response.data;
        // console.log(data)
       setList(data[0]);
    }
    catch(err){
       setErros(err.message)
    //     setTimeout(()=>{
    //     setErros('')
    //  },3000)
     
    }
   }

  
  return (
  <div>
   {list && Object.keys(list).length > 0 ? (
      <>
      <h1 className='country-name'> {list.name.common}</h1>
     <img src={list.coatOfArms.png} alt="" />
     <p>Region:{list.region}</p>
     <p>Population: <span>{(list.population)}</span></p>
     <p>Time Zones:<span>{list.timezones}</span></p>
    </>
   ):<>Your data is loading</>
   }
   {errors && <div>{errors}</div>}
  </div>
  );
}

export default Countries;

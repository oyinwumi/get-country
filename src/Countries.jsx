import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './App.css';

function Countries() {
    const [list , setList] = useState([]);
    const [name , setName] = useState('')
    
    const navigate = useNavigate()

  useEffect(() => {
  getApi()
    
  }, []);
     const getApi = async() =>{
    const response = await axios.get('https://restcountries.com/v3.1/all')
    const data = await response.data
    console.log(data)
    setList(data);
   }
   const fetchCountry = async(e) =>{
     e.preventDefault();

      const response = await axios.get(`https://restcountries.com/v3.1/name/${name}`);
    const data = await response.data;
   
    setList(data);
   }

   const routeToCountry = (e) =>{
      navigate(`/country/${e.target.textContent}`)
   }
  
  return (
    <div className='App'>

     <form>
       <label>Country name</label>
       <input type="text" value={name}  onChange={(e) => setName(e.target.value)}/>
       <button onClick={fetchCountry}>search</button>
     </form>
     
     { list.map((country)=>{
        return (
          <div onClick={routeToCountry} key={country.name.common} className=" country-list">
           {country.name.common}
          </div>
        )
        
      })
     }
 
    </div>
  );
}

export default Countries;
// filter((country)=>{
        //     return search.toLowerCase() === ''
        //     ? country
        //     : (country.name.common.toLowerCase().includes(search) ) 
        //  })
        // <input type='text' onChange={(e) => setSearch(e.target.value)}/>
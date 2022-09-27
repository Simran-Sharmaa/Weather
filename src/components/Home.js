import React,{useState, useEffect} from 'react'

const Home = (props) => {
  const [search, setSearch] = useState('Kalka');
  const [city, setCity] = useState(null)
  useEffect(()=>{
  const  fetchApi = async()=>{
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=93ae0b6caecc4a47d2ae3d022cea5c29`
    const response=await fetch(url);
    const jsonResponse =await response.json();
    console.log('jsonResponse', jsonResponse);
    setCity(jsonResponse.main);
  }

    fetchApi();
  },[search])
  return (
    <>
    <h1 className='my-4'>Check Temperature</h1>
    <div className='row my-4' style={{marginRight: "calc(1.5 * var(--bs-gutter-x))"}}>
        <div className="col-md-4 container card " style={{height:"25rem"}}>
        <form className="d-flex position-absolute container my-4" style={{width:"90%"}} role="search">
        <input className="form-control me-2 container ps-4 " value={search} onChange={(event)=>{setSearch(event.target.value)}} type="search" placeholder="Search" aria-label="Search"/>

      </form>
  <img src="https://i.pinimg.com/236x/0f/89/f5/0f89f50a7974571767412679334c8a78.jpg"style={{height:"25rem"}} className="card-img" alt="..."/>
    
    {
      !city?
      (
        <>
  
  <div className="card-img-overlay  mt-4" style={{top:"85px"}}>

    <h5 className="card-text">No Data found</h5>
    </div>
    </>
      )
      
      :
      ( <>
  
  <div className="card-img-overlay  mt-4" style={{top:"85px"}}>
    <h5 className="card-title mt-4">City - {search.charAt(0).toUpperCase()+search.slice(1)}</h5>
    <h5 className="card-text">Temperature - {city.temp} °C </h5>
    <h5 class="card-text"><small class="text-muted">Min Temp - {city.temp_min} °C </small></h5>
    <h5 class="card-text"><small class="text-muted">Max Temp - {city.temp_max} °C </small></h5>

   
  </div>
  </>)
}
  
</div>


</div>
        </>
  )
}

export default Home
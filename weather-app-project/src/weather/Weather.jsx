import React,{useState} from "react";

export default function Weather() {
    const [city,setcity] = useState("");
    const [result,setResult] = useState("");

    const changehandler = e =>{
        setcity(e.target.value);
    }

    const submithandler = e =>{
        e.preventDefault();
        // console.log(city)
        fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid={API key}}
        `).then(
      response=> response.json()).then(
        data => {
          const kelvin = data.main.temp;
          const celcius = kelvin - 273.15;
          setResult("Temperature at "+city+"\n"+Math.round(celcius)+"°C");
        }
      ).catch(error => console.log(error))
      setcity("");
  }

    
      return (
    <div>
      <center>
        <div className="card">
          <div className="card-body">
            <h2 className="card-title">Weather App</h2>
            <form onSubmit={submithandler}>
              <input type="text" name="city"  value={city}  onChange={changehandler}/> <br /> <br />
              <input type="submit" value="Get Temparature" />
            </form><br /> <br />
            <div>
               <h1>{result}</h1> 
            </div>
          </div>
        </div>
      </center>
    </div>
  );
}

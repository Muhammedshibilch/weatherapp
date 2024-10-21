import { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=8ac5c4d57ba6a4b3dfcf622700447b1e&units=metric`;

  const search = (e) => {
    if (e.key == "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
    }
  };

  return (
    <>
      <div
        className="main"
        style={{
          backgroundImage: "url('/e1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "100vh",
        }}
      >
        <div
          className=" blurred"
          style={{
            width: "400px",
            height: "500px",
            borderRadius: "50px",
            position: "absolute",
            top: "50%",
            left: "30%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <div className="d-flex justify-content-center align-items-center">
            <h3
              className=""
              style={{
                fontSize: "30px",
                fontWeight: "700",
                textDecoration: "underline ",
                color: "",
              }}
            >
              Forcast Details
            </h3>
          </div>
          <center>
            {data.weather ? (
              <h4 style={{ fontSize: "2rem", color: "#D3D3D3", color: "" }}>
                {data.weather[0].description}
              </h4>
            ) : null}
          </center>
          <div className="d-flex justify-content-between">
            <h4 style={{ fontSize: "1.2rem", fontWeight: "520" }}>Country : </h4>
            <div>
              {data.sys ? (
                <h4 style={{ fontSize: "1.2rem", fontWeight: "520" }}>
                  {data.sys.country}
                </h4>
              ) : null}
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <h4 style={{ fontSize: "1.2rem", fontWeight: "520" }}>Temp_min : </h4>
            <div>
              {data.main ? (
                <h4 style={{ fontSize: "1.2rem", fontWeight: "520" }}>
                  {data.main.temp_min}°F
                </h4>
              ) : null}
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <h4 style={{ fontSize: "1.2rem", fontWeight: "520" }}>Temp_max : </h4>
            <div>
              {data.main ? (
                <h4 style={{ fontSize: "1.2rem", fontWeight: "520" }}>
                  {data.main.temp_max}°F
                </h4>
              ) : null}
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <h4 style={{ fontSize: "1.2rem", fontWeight: "520" }}>Humidity : </h4>
            <div>
              {data.main ? (
                <h4 style={{ fontSize: "1.2rem", fontWeight: "520" }}>
                  {data.main.humidity}%
                </h4>
              ) : null}
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <h4 style={{ fontSize: "1.2rem", fontWeight: "520" }}>Pressure : </h4>
            <div>
              {data.main ? (
                <h4 style={{ fontSize: "1.2rem", fontWeight: "520" }}>
                  {data.main.pressure}°P
                </h4>
              ) : null}
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <h4 style={{ fontSize: "1.2rem", fontWeight: "520" }}>Wind : </h4>
            <div>
              {data.wind ? (
                <h4 style={{ fontSize: "1.2rem", fontWeight: "520" }}>
                  {data.wind.speed}km/hr
                </h4>
              ) : null}
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <h4 style={{ fontSize: "1.2rem", fontWeight: "520" }}>Cloudy : </h4>
            <div>
              {data.clouds ? (
                <h4 style={{ fontSize: "1.2rem", fontWeight: "520" }}>
                  {data.clouds.all}%
                </h4>
              ) : null}
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <h4 style={{ fontSize: "1.2rem", fontWeight: "520" }}>
              Feels_like : 
            </h4>
            <div>
              {data.main ? (
                <h4 style={{ fontSize: "1.2rem", fontWeight: "520" }}>
                  {data.main.feels_like}°F
                </h4>
              ) : null}
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <h4 style={{ fontSize: "1.2rem", fontWeight: "520" }}>
              Grnd_level :
            </h4>
            <div>
              {data.main ? (
                <h4 style={{ fontSize: "1.2rem", fontWeight: "520" }}>
                  {data.main.grnd_level}%
                </h4>
              ) : null}
            </div>
          </div>

          <div>
            <input
              type="search"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              onKeyPress={search}
              placeholder="Enter The Location.."
              style={{
                marginLeft: "10%",
                marginTop: "20px",
                width: "300px",
                height: "40px",
                padding: "10px",
                borderRadius: "20px",
                border: "1px solid #ccc",
                fontSize: "16px",
                fontFamily: "Arial, sans-serif",
                boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                outline: "none",
              }}
            />
          </div>
        </div>

        <div
          className=" blurred"
          style={{
            width: "400px",
            height: "500px",
            borderRadius: "50px",
            position: "absolute",
            top: "50%",
            left: "70%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <div
            className="subdiv1 flex flex-col justify-content-center align-items-center bottom-0 p-10"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            {data.main ? (
              <h1 style={{ fontSize: "50px", color: "" }}>
                {data.main.temp} °F
              </h1>
            ) : null}
            {data.main != undefined && (
              <div>
                <h3 style={{ fontSize: "50px", color: "" }}>{data.name}</h3>
                <h5 style={{ color: "" }}>
                  Monday,21 Sep ‘24 <i className="fa-solid fa-cloud"></i>
                </h5>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

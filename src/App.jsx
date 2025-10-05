import { useCallback, useEffect, useState } from "react";
import "./App.css";
import Card from "./Card";

function App() {
    const [City, SetCity] = useState("");
    const [Data, SetData] = useState({});
    const [Location, SetLocation] = useState([]);

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (pos) => {
                    SetLocation([pos.coords.latitude, pos.coords.longitude]);
                },
                (error) => {
                    console.error("Error: ", error);
                }
            );
        } else {
            console.log("XYZ");
        }
    }, []);

    useEffect(() => {
        if (Location.length != 0) {
            async function getWeather() {
                const response = await fetch(
                    `https://nominatim.openstreetmap.org/reverse?lat=${Location[0]}&lon=${Location[1]}&format=json`
                );
                const data = await response.json();
                console.log(data);

                SetCity(() => data.address.town || data.address.neighbourhood);
            }
            getWeather();
        }
    }, [Location]);

    useEffect(() => {
        async function gettingweatherdata() {
            try {
                const data = await fetch(
                    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${City},%20India?key=WK97CWGJ9XZVTP88RK3JQC963`
                );
                const res = await data.json();
                console.log(res);
                SetData(res);
            } catch (error) {
                console.log("error in fetching details", error);
            }
        }

        if(City){
            gettingweatherdata()
        }
        
    }, [City]);

    return (
        <>
            <Card SetCity={SetCity} data={Data}/>
        </>
    );
}

export default App;

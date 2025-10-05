import React, { useCallback } from "react";
// import debounce from 'lodash.debounce';
import useDebounce from "./useDebounce";

const Card = ({ SetCity, data }) => {
    const handleInput = useDebounce((value) => {
        SetCity(value);
    }, 600);
    let cityname = "";
    return (
        <div className="bg-background-light dark:bg-background-dark font-display min-h-screen w-2xl absolute left-2/7 flex flex-col justify-between overflow-x-hidden">
            {/* Header */}
            <header className="sticky top-0 z-10 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm">
                <div className="flex items-center p-4">
                    <h1 className="flex-1 text-center text-xl font-bold text-slate-800 dark:text-white">
                        Weather
                    </h1>
                    <button className="flex h-10 w-10 items-center justify-center rounded-full text-slate-600 dark:text-slate-300">
                        {/* Dots Icon */}
                        <svg
                            fill="currentColor"
                            height="24"
                            width="24"
                            viewBox="0 0 256 256"
                        >
                            <path d="M140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128Zm56-12a12,12,0,1,0,12,12A12,12,0,0,0,196,116ZM60,116a12,12,0,1,0,12,12A12,12,0,0,0,60,116Z"></path>
                        </svg>
                    </button>
                </div>
            </header>

            {/* Main */}
            <main className="p-4 space-y-4 flex-grow">
                {/* Search Input */}
                <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                        <svg
                            className="h-5 w-5 text-slate-400 dark:text-slate-500"
                            fill="currentColor"
                            viewBox="0 0 256 256"
                        >
                            <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
                        </svg>
                    </div>
                    <input
                        type="search"
                        placeholder="Search for a city or airport"
                        className="w-full rounded-lg border-none bg-slate-200/60 dark:bg-slate-800/60 py-3 pl-11 pr-4 text-slate-800 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary"
                        onChange={(e) => handleInput(e.target.value)}
                    />
                </div>

                {/* Weather Section */}
                <div className="flex flex-col items-center text-center">
                    <h2 className="text-3xl font-bold text-slate-800 dark:text-white">
                        {data.address}
                    </h2>
                    <p className="text-6xl font-bold text-slate-800 dark:text-white tracking-tighter">
                        {data?.currentConditions?.temp}
                    </p>
                    <p className="text-lg text-slate-500 dark:text-slate-400">
                        {data?.currentConditions?.conditions}
                    </p>
                    <p className="text-slate-500 dark:text-slate-400">
                        Humidity: {data?.currentConditions?.humidity}{"  "}
                        Feels like: {data?.currentConditions?.feelslike}
                    </p>
                </div>

                {/* Air Conditions */}
                <div className="bg-slate-200/60 dark:bg-slate-800/60 rounded-xl p-4">
                    <h3 className="text-sm font-bold text-slate-500 dark:text-slate-400 mb-3">
                        AIR CONDITIONS
                    </h3>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-6">
                        {/* Temp */}
                        <div className="flex items-center gap-2">
                            <svg
                                className="h-6 w-6 text-primary"
                                fill="currentColor"
                                viewBox="0 0 256 256"
                            >
                                <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Z"></path>
                            </svg>
                            <div>
                                <p className="text-sm text-slate-500 dark:text-slate-400">
                                    Temp
                                </p>
                                <p className="font-bold text-slate-800 dark:text-white">
                                    {data?.currentConditions?.temp}
                                </p>
                            </div>
                        </div>
                        {/* Wind */}
                        <div className="flex items-center gap-2">
                            <svg
                                className="h-6 w-6 text-primary"
                                fill="currentColor"
                                viewBox="0 0 256 256"
                            >
                                <path d="M232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-24,0a80,80,0,1,0-80,80A80.09,80.09,0,0,0,208,128Zm-88,56a8,8,0,0,0,8-8V139.31l32.49,32.5a8,8,0,0,0,11.32-11.32L149.31,136H184a8,8,0,0,0,0-16H136a8,8,0,0,0-8,8v48a8,8,0,0,0,8,8Z"></path>
                            </svg>
                            <div>
                                <p className="text-sm text-slate-500 dark:text-slate-400">
                                    Wind
                                </p>
                                <p className="font-bold text-slate-800 dark:text-white">
                                     {data?.currentConditions?.windspeed} km/h
                                </p>
                            </div> 
                        </div>
                    </div>
                </div>

                {/* City List */}
                <div className="space-y-3">
                    {[
                        { city: "Tahoe City", time: "11:17 PM", temp: "4°" },
                        { city: "Beijing", time: "2:17 PM", temp: "26°" },
                        { city: "Geneva", time: "8:17 AM", temp: "16°" },
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="flex items-center justify-between gap-4 rounded-lg bg-slate-200/60 dark:bg-slate-800/60 p-3"
                        >
                            <div className="flex flex-col">
                                <p className="font-bold text-slate-800 dark:text-white">
                                    {item.city}
                                </p>
                                <p className="text-sm text-slate-500 dark:text-slate-400">
                                    {item.time}
                                </p>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-10 h-10 rounded-full bg-slate-400" />
                                <p className="text-2xl font-bold text-slate-800 dark:text-white">
                                    {item.temp}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default Card;

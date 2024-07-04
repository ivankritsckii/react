import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import React from 'react'
//import { searchWraper } from './searchWraper'
import './App.css'
import './searchStyle.css'
import { APIRequest } from './APIRequests/APIRequest'

function App() {
    //const [count, setCount] = useState(0)
    //const searchWraper = searchWraper();
    //указать в UseState стартовое значение
    const [searchValue, setSearchValue] = useState('');
    return (
        <div className="search_wraper">
            <input 
            value = {searchValue}
            onChange={e => setSearchValue(e.target.value)}/>
            <button className="search_btn" onClick = {async () => await APIRequest(searchValue)}>Search</button>
        </div>
        /*<>
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img
                        src={reactLogo}
                        className="logo react"
                        alt="React logo"
                    />
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>*/
    )
}

export default App

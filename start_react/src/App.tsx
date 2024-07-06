//import { useState } from 'react'
import { Component } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import React from 'react'
import { SearchWraper } from './searchWraper'
import './App.css'
import './searchStyle.css'
import { APIRequest } from './APIRequests/APIRequest'

class App extends Component {
    state = {
        searchValue: localStorage.getItem("searchValue") || "",
        serchResult: '{}'
    }
    render() {
        const RequestHandler = async () => {
            APIRequest(this.state.searchValue)
            .then(json => {
                if(json){this.state.serchResult = json; 
                this.changeSearchResult(this.state.serchResult)
                localStorage.setItem('searchValue', this.state.searchValue)
                console.log(this.state.serchResult)}
                })
        }
        window.addEventListener('load', RequestHandler)
        return ( 
        <div className='root_wraper'>
        <div className="search_wraper">
            <input 
            value = {this.state.searchValue}
            onChange={e => this.changeSearchValue(e.target.value)}/>
            <button className="search_btn" onClick = {RequestHandler}>Search</button>
        </div >
        <SearchWraper {...JSON.parse(this.state.serchResult)} />
        </div>
    )
    }
    changeSearchValue = (target:string) => this.setState({
        searchValue: target
    })
    changeSearchResult = (target:string) => this.setState({
        serchResult: target
    })
    
}

/*function App() {
    const [searchValue, setSearchValue] = useState('');
    const [serchResult, setSerchResult] = useState('{}');
    return ( 
        <div className='root_wraper'>
        <div className="search_wraper">
            <input 
            value = {searchValue}
            onChange={e => setSearchValue(e.target.value)}/>
            <button className="search_btn" onClick = {async () => {
                APIRequest(searchValue)
                .then(json => {
                    if(json){setSerchResult(json); 
                    console.log(searchValue, serchResult)}
                    })
            }}>Search</button>
        </div >
        <SearchWraper {...JSON.parse(serchResult)} />
        </div>
        <>
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
        </>
    )
}*/

export default App

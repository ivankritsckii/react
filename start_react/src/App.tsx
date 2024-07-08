//import { Component } from 'react'
import { useState } from 'react'
import PacmanLoader from 'react-spinners/PacmanLoader'
import { MainWraper } from './mainWraper.tsx'
import './searchStyle.css'
import { APIRequest } from './APIRequests/APIRequest'
import { MyErrorBoundary } from './errorHeandlet.tsx'

export function App () {
    const [searchValue, setSearchValue] = useState(localStorage.getItem('searchValue') || '');
    const [serchResult, setSerchResult] = useState('{}');
    const [isGetAPIRequest, setIsGetAPIRequest] = useState(true);
    const [isError,  setIsError] = useState(false);

    if(isError) {
        throw new Error ('new Error')
    }
    const RequestHandler = async () => {
        changeIsAPIRequest(false)
        APIRequest(searchValue).then((json) => {
            if (json) {
                console.log(json)
                setSerchResult(json)
                localStorage.setItem('searchValue', searchValue)
                console.log(serchResult);
            }
            changeIsAPIRequest(true)
        })
    }

    const handleError = () => setIsError(true)

    const changeSearchValue = (target: string) => setSearchValue(target)
    const changeIsAPIRequest = (target: boolean) => setIsGetAPIRequest(target)
    const LoadingOpenClose = (state: boolean) => {
        return state ? (
            ''
        ) : (
            <div className="loading">
                //<PacmanLoader color={'#36D7B7'} size={150} />{' '}
            </div>
        )
    }
    window.addEventListener('load', RequestHandler)
   return(
    <MyErrorBoundary>
    <div className="root_wraper">
        {LoadingOpenClose(isGetAPIRequest)}
        <div className="search_wraper">
            <input
                value={searchValue}
                onChange={(e) => {
                    changeSearchValue(e.target.value)
                    if(e.target.value === "error") {
                        throw new Error("new err")
                    }
                }}
            />
            <button className="search_btn" onClick={RequestHandler}>
                Search
            </button>
            <button
                className="search_btn error_btn"
                onClick={handleError}
            >
                Throw an error
            </button>
        </div>

        <MainWraper
            serchResult={JSON.parse(serchResult)}
        />
    </div>
    </MyErrorBoundary>
   )
}
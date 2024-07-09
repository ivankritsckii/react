import { useState } from 'react'
import { LoadingOpenClose } from './loadingOpenClose.tsx'
import { MainWraper } from './mainWraper.tsx'
import './searchStyle.css'
import { MyErrorBoundary } from './errorHeandlet.tsx'
import { RequestHandler } from './APIRequests/RequestHandler.ts'

export function App () {
    const [searchValue, setSearchValue] = useState(localStorage.getItem('searchValue') || '');
    const [serchResult, setSerchResult] = useState('{}');
    const [isGetAPIRequest, setIsGetAPIRequest] = useState(true);
    const [isError,  setIsError] = useState(false);

    if(isError) {
        throw new Error ('new Error')
    }

    const APIHandler = () => {
        setIsGetAPIRequest(false)
        RequestHandler(searchValue).
        then((json) => {
            setSerchResult(json);
            setIsGetAPIRequest(true)
        })
    }
    window.addEventListener('load', APIHandler)
   return(
    <MyErrorBoundary>
    <div className="root_wraper">
        {LoadingOpenClose(isGetAPIRequest)}
        <div className="search_wraper">
            <input
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
            />
            <button className="search_btn" onClick={APIHandler}>
                Search
            </button>
            <button
                className="search_btn error_btn"
                onClick={() => setIsError(true)}
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
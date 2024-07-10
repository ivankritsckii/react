import { useState } from 'react'
import { LoadingOpenClose } from './helpers/loadingOpenClose.tsx'
import { MainWraper } from './mainWraper.tsx'
import './searchStyle.css'
import { MyErrorBoundary } from './helpers/errorHeandlet.tsx'
import { RequestHandler } from './APIRequests/RequestHandler.ts'
import { Pagination } from './pagination.tsx'
import { Link } from 'react-router-dom'

export function App ({page = 1}) {
    const [curPage, setCurPage] = useState(page);
    const [searchValue, setSearchValue] = useState(localStorage.getItem('searchValue') || '');
    const [serchResult, setSerchResult] = useState('{}');
    const [isGetAPIRequest, setIsGetAPIRequest] = useState(true);
    const [isError,  setIsError] = useState(false);

    if(isError) {
        throw new Error ('new Error')
    }
    

    const APIHandler = (page:number) => {
        setIsGetAPIRequest(false)
        RequestHandler(searchValue, page).
        then((json) => {
            setSerchResult(json);
            setIsGetAPIRequest(true)
        })
    }
    if(page !== curPage) {
        console.log(page);
        setCurPage(page);
        APIHandler(page)
    }

    window.addEventListener('load', () => APIHandler(curPage))
   return(
    <MyErrorBoundary>
    <div className="root_wraper">
        {LoadingOpenClose(isGetAPIRequest)}
        <div className="search_wraper">
            <input
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
            />
            <Link to = {`/react/`}>
            <button className="search_btn" onClick={() => {APIHandler(1)}}>
                Search
            </button>
            </Link>
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
        <Pagination serchResult={JSON.parse(serchResult)} />
    </div>
    </MyErrorBoundary>
   )
}
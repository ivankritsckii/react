import { useState, useEffect } from 'react'
import { LoadingOpenClose } from './helpers/loadingOpenClose.tsx'
import { MainWraper } from './mainWraper.tsx'
import './searchStyle.css'
//import { MyErrorBoundary } from './helpers/errorHeandlet.tsx'
//import { RequestHandler } from './APIRequests/RequestHandler.ts'
import { Pagination } from './pagination.tsx'
import { Link } from 'react-router-dom'
import { useLocalStorage } from './helpers/useLS.ts'
import {useGetTodosQuery} from "./APIRequests/sliceAPI"

export function App({ page = 1 }) {
    const [searchValue, setSearchValue] = useLocalStorage('searchValue', '')
    const [curSearchValue, setCurSearchValue] = useLocalStorage('searchValue', '')
    const [serchResult, setSerchResult] = useState('{}')
    const [isError, setIsError] = useState(false)

    const {
        data: todos,
        isLoading,
        isSuccess,
    } = useGetTodosQuery({searchValue: curSearchValue, page: page});
    console.log(isSuccess)

    if (isError) {
        throw new Error('new Error')
    }

    /*const APIHandler = (page: number) => {
        setIsGetAPIRequest(false)
        RequestHandler(searchValue, page).then((json) => {
            setSerchResult(json)
            setIsGetAPIRequest(true)
        })
    }
    if (page !== curPage) {
        setCurPage(page)
        APIHandler(page)
    }*/
    useEffect(() => {
        if(todos) setSerchResult(todos)
    }, [todos])
    //window.addEventListener('load', () => APIHandler(curPage))
    return (
            <div className="root_wraper">
                {LoadingOpenClose(!isLoading && isSuccess)}
                <div className="search_wraper">
                    <input
                        value={searchValue}
                        onChange={(e) => {
                            setSearchValue(e.target.value)
                        }}
                    />
                    <Link to={`/react/page=1`}>
                        <button
                            className="search_btn"
                            onClick={() => {
                                setCurSearchValue(searchValue)
                            }}
                        >
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
                <MainWraper todos = {todos} />
                <Pagination serchResult={JSON.parse(JSON.stringify(serchResult))} />
            </div>
    )
}

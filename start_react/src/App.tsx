import { useState, useEffect } from 'react'
import { LoadingOpenClose } from './helpers/loadingOpenClose.tsx'
import { MainWraper } from './mainWraper.tsx'
import './searchStyle.css'
import { Pagination } from './pagination.tsx'
import { Link } from 'react-router-dom'
import { useLocalStorage } from './helpers/useLS.ts'
import {useGetTodosQuery} from "./APIRequests/sliceAPI"
import { addPage, setCurPage } from './tookitRedux/toolKitSlice.ts'
import { useDispatch, useSelector } from 'react-redux'

export function App({ page = 1 }) {
    const [searchValue, setSearchValue] = useLocalStorage('searchValue', '')
    const [curSearchValue, setCurSearchValue] = useLocalStorage('searchValue', '')
    const [serchResult, setSerchResult] = useState('{}')
    const [isError, setIsError] = useState(false)
    const dispatch = useDispatch();
    

    const {
        data: todos,
        isLoading,
        isSuccess,
    } = useGetTodosQuery({searchValue: curSearchValue, page: page});
   
   
    const state = useSelector((state:{toolkit:{curPage:number, pages:[]}}) => {
        const curPage = state.toolkit.curPage;
        return state.toolkit.pages[curPage]
    });
    if (isError) {
        throw new Error('new Error')
    }

    useEffect(() => {
        if(todos) {
            dispatch(addPage({pageInfo:todos, pageNum: page, searchReq:searchValue}));
            dispatch(setCurPage(`searchReq:${searchValue} pageNum:${page}`))
        }
    }, [todos])
    
    useEffect(() => {
        if(state) {setSerchResult(state);
        }
    }, [state])
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
                                setCurSearchValue(searchValue);
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
                <MainWraper state = {state} />
                <Pagination serchResult={JSON.parse(JSON.stringify(serchResult))} />
            </div>
    )
}

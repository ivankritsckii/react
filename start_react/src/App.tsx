import { Component } from 'react'
import PacmanLoader from 'react-spinners/PacmanLoader'
import { MainWraper } from './mainWraper.tsx'
import './searchStyle.css'
import { APIRequest } from './APIRequests/APIRequest'
import { MyErrorBoundary } from './errorHeandlet.tsx'

class App extends Component {
    state = {
        searchValue: localStorage.getItem('searchValue') || '',
        serchResult: '{}',
        isGetAPIRequest: true,
        isError: false
    }
    
    render() {
        if(this.state.isError) {
            throw new Error ('new Error')
        }
        const RequestHandler = async () => {
            this.changeIsAPIRequest(false)
            APIRequest(this.state.searchValue).then((json) => {
                if (json) {
                    this.state.serchResult = json
                    this.changeSearchResult(this.state.serchResult)
                    localStorage.setItem('searchValue', this.state.searchValue)
                }
                this.changeIsAPIRequest(true)
            })
        }
        const handleError = () => {
            this.setState({
                isError: true,
            })
        }

        window.addEventListener('load', RequestHandler)
        
        return (
            <MyErrorBoundary>
                <div className="root_wraper">
                    {this.LoadingOpenClose(this.state.isGetAPIRequest)}
                    <div className="search_wraper">
                        <input
                            value={this.state.searchValue}
                            onChange={(e) => {
                                this.changeSearchValue(e.target.value)
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
                        serchResult={JSON.parse(this.state.serchResult)}
                    />
                </div>
                </MyErrorBoundary>
        )
        
    }
    changeSearchValue = (target: string) =>
        this.setState({
            searchValue: target,
        })
    changeSearchResult = (target: string) =>
        this.setState({
            serchResult: target,
        })
    changeIsAPIRequest = (target: boolean) =>
        this.setState({
            isGetAPIRequest: target,
        })
    LoadingOpenClose = (state: boolean) => {
        return state ? (
            ''
        ) : (
            <div className="loading">
                <PacmanLoader color={'#36D7B7'} size={150} />{' '}
            </div>
        )
    }
}

export default App

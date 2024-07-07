import { Component } from 'react'
import PacmanLoader from 'react-spinners/PacmanLoader'
import { SearchWraper } from './searchWraper'
import './App.css'
import './searchStyle.css'
import { APIRequest } from './APIRequests/APIRequest'

class App extends Component {
    state = {
        searchValue: localStorage.getItem('searchValue') || '',
        serchResult: '{}',
        isGetAPIRequest: true,
    }
    render() {
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
            throw new Error('this error')
        }

        window.addEventListener('load', RequestHandler)
        return (
                <div className="root_wraper">
                    {this.LoadingOpenClose(this.state.isGetAPIRequest)}
                    <div className="search_wraper">
                        <input
                            value={this.state.searchValue}
                            onChange={(e) => this.changeSearchValue(e.target.value)}
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

                    <SearchWraper
                        serchResult={JSON.parse(this.state.serchResult)}
                    />
                </div>
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

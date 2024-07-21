import './resultStyle.css'
import { Link, Outlet } from 'react-router-dom'
import { CheckBox } from './helpers/checkbox';

interface todo {
    results: {
        name: string, 
        height: string,
        mass: string,
        isActive: boolean
    }[]
}

export function MainWraper(args: { state: todo}) {
    if (args.state && args.state.results) {
        const searchList = args.state.results.map(
            (item) => {
                return (
                    <Link
                        to={`${window.location.href.split('/datails')[0]}/datails`}
                        key={item.name}
                    >
                        <div
                            className="card_wraper"
                            onClick={() => {
                                localStorage.setItem(
                                    'current_caracter_name',
                                    item.name
                                )
                            }}
                        >
                            <div className="card_name">Name: {item.name}</div>
                            <div className="card_height">
                                Height: {item.height}
                            </div>
                            <div className="card_mass">Mass: {item.mass}</div>
                            <CheckBox obj = {{
                                isActive: item.isActive, 
                                name: item.name,
                                }}/>
                        </div>
                    </Link>
                )
            }
        )
        return (
            <div className="result_window_wraper">
                <Link to={window.location.href.split('datails')[0]}>
                    <div
                        className="search_value_wraper"
                    >
                        {searchList}
                    </div>
                </Link>
                <div className="datails_wraper">
                    <Outlet />
                </div>
            </div>
        )
    }
    /*if (args.serchResult.results) {
        const searchList = args.serchResult.results.map(
            (item: { name: string; height: string; mass: string }) => {
                return (
                    <Link
                        to={`${window.location.href.split('/datails')[0]}/datails`}
                        key={item.name}
                    >
                        <div
                            className="card_wraper"
                            onClick={() => {
                                localStorage.setItem(
                                    'current_caracter_name',
                                    item.name
                                )
                            }}
                        >
                            <div className="card_name">Name: {item.name}</div>
                            <div className="card_height">
                                Height: {item.height}
                            </div>
                            <div className="card_mass">Mass: {item.mass}</div>
                            <CheckBox />
                        </div>
                    </Link>
                )
            }
        )
        return (
            <div className="result_window_wraper">
                <Link to={window.location.href.split('datails')[0]}>
                    <div
                        className="search_value_wraper"
                    >
                        {searchList}
                    </div>
                </Link>
                <div className="datails_wraper">
                    <Outlet />
                </div>
            </div>
        )
    }*/
}

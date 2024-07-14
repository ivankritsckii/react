import './resultStyle.css'
import { Link, Outlet } from 'react-router-dom'

export function MainWraper(args: { serchResult: { results: [] } }) {
    if (args.serchResult.results) {
        const searchList = args.serchResult.results.map(
            (item: { name: string; height: string; mass: string }) => {
                return (
                    <Link
                        to={`${window.location.href.split('datails')}/datails`}
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
}

import './resultStyle.css'
import { Link, Outlet } from 'react-router-dom'
import { CheckBox } from './helpers/checkbox';
import { DetailSelected } from './detailSelected' 
import { useSelector } from 'react-redux';

interface todo {
    count:number,
    results: {
        name: string, 
        height: string,
        mass: string,
        isActive: boolean
    }[]
}

export function MainWraper() {
    const curState: todo = useSelector((state:{toolkit:{curPage:number, pages:[]}}) => {
        const curPage = state.toolkit.curPage;
        return state.toolkit.pages[curPage]
    });
    if (curState && curState.results) {
        const searchList = curState.results.map(
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
                                name: item.name,
                                }}/>
                        </div>
                    </Link>
                )
            }
        )
        return (
            <div className="result_window_wraper">
                <DetailSelected />
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

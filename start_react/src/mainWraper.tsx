import './resultStyle.css'
//import { Outlet } from 'react-router-dom'
import Link from 'next/link'
import { CheckBox } from './helpers/checkbox'
import { DetailSelected } from './detailSelected'
import { useSelector } from 'react-redux'
import { useContext, useState, useEffect } from 'react'
import { ThemeContent } from './helpers/themeChanger.tsx'
import { todo } from './interfaces/todoInterface.ts'
import { DatailsElement } from './detailsElement.tsx'

export function MainWraper() {
    const [isDatailsOpen, setIsDatailsOpen] = useState(false);
    const { isdarkMode } = useContext(ThemeContent)
    const curState: todo = useSelector(
        (state: { toolkit: { curPage: number; pages: [] } }) => {
            const curPage = state.toolkit.curPage
            return state.toolkit.pages[curPage]
        }
    )

    useEffect(() => {
        setIsDatailsOpen(!!window.location.href.split('/datail')[1])
        }
    , [window.location.href])


    if (curState && curState.results) {
        const searchList = curState.results.map((item) => {
            return (
                <Link
                    href={`${window.location.href.split('/datails')[0]}/datails`}
                    key={item.name}
                >
                    <div
                        className={
                            isdarkMode ? 'card_wraper' : 'card_wraper card_dark'
                        }
                        onClick={() => {
                            localStorage.setItem(
                                'current_caracter_name',
                                item.name
                            )
                        }}
                    >
                        <div className="card_name">Name: {item.name}</div>
                        <div className="card_height">Height: {item.height}</div>
                        <div className="card_mass">Mass: {item.mass}</div>
                        <CheckBox
                            obj={{
                                name: item.name,
                            }}
                        />
                    </div>
                </Link>
            )
        })
        return (
            <div
                className={
                    isdarkMode
                        ? 'result_window_wraper'
                        : 'result_window_wraper result_window_wraper_dark'
                }
            >
                <DetailSelected />
                <Link href={window.location.href.split('datails')[0]}>
                    <div className="search_value_wraper">{searchList}</div>
                </Link>
                <div className="datails_wraper">
                {isDatailsOpen ? <DatailsElement />: ''}
                </div>
            </div>
        )
    }
}

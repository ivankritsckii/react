import './resultStyle.css'
import { Link } from 'react-router-dom'
import { useState, useEffect, useContext } from 'react'
import { ThemeContent } from './helpers/themeChanger.tsx'
import { useSelector } from 'react-redux'

export function DatailsElement() {

    const curState = useSelector((state:{toolkit:{curPage:number, pages:{results:[]}[]}}) => {
        const curPage = state.toolkit.curPage;
        return state.toolkit.pages[curPage].results
    });
    console.log(curState)
    const {isdarkMode}= useContext(ThemeContent)
    const characterDef = [
        {
            name: 'def',
            height: 'def',
            mass: 'def',
            hair_color: 'def',
            skin_color: 'def',
            eye_color: 'def',
            birth_year: 'def',
            gender: 'def',
        },
    ]
    const current = localStorage.getItem('current_caracter_name')
    useEffect(() => {
        if (current) {
            setCharacter(curState.filter((item: {name: string}) => item.name === localStorage.getItem('current_caracter_name')))
        }
    }, [current])
    const [character, setCharacter] = useState(characterDef)
    return (
        <div className={isdarkMode ? "details_wraper" : "details_wraper detail_dark"}>
            <div className="details_titel">Detailed information</div>
            <div className="details_name">Name: {character[0].name}</div>
            <div className="details_name">Height: {character[0].height}</div>
            <div className="details_name">Mass: {character[0].mass}</div>
            <div className="details_name">
                Hair Color: {character[0].hair_color}
            </div>
            <div className="details_name">
                Skin Color: {character[0].skin_color}
            </div>
            <div className="details_name">
                Eye Color: {character[0].eye_color}
            </div>
            <div className="details_name">
                Birth Year: {character[0].birth_year}
            </div>
            <div className="details_name">Gender: {character[0].gender}</div>
            <Link to={window.location.href.split('datails')[0]}>
                <button>Close</button>
            </Link>
        </div>
    )
}

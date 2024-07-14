import './resultStyle.css'
import { Link } from 'react-router-dom'
import { detailsRequestHandler } from './APIRequests/detailsRequestHandler'
import { useState, useEffect } from 'react'
import { LoadingOpenClose } from './helpers/loadingOpenClose'

export function DatailsElement() {
    const [isGetAPIRequest, setIsGetAPIRequest] = useState(true)
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
            setIsGetAPIRequest(false)
            detailsRequestHandler(current).then((json) => {
                setCharacter(JSON.parse(json).results)
                setIsGetAPIRequest(true)
            })
        }
    }, [current])
    const [character, setCharacter] = useState(characterDef)
    return (
        <div className="details_wraper">
            {LoadingOpenClose(isGetAPIRequest)}
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

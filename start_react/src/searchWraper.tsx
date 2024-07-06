import './resultStyle.css'

export function SearchWraper (serchResult:{results:[]}) {
    console.log(serchResult);
    if(serchResult.results){
        const searchList = serchResult.results.map((item:{name: string, height:string, mass: string}) => {
        return (
            <div className="card_wraper">
                <div className="card_name">Name: {item.name}</div>
                <div className="card_height">Height: {item.height}</div>
                <div className="card_mass">Mass: {item.mass}</div>
            </div>
        )
    })
    console.log(searchList);
    return (
        <div className="result_window_wraper">
            {searchList}
        </div>
    )
    }
    
}
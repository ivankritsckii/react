import './resultStyle.css'

export function SearchWraper (args:{serchResult:{results:[]}}) {
    if(args.serchResult.results){
        const searchList = args.serchResult.results.map((item:{name: string, height:string, mass: string}) => {
        return (
            <div className="card_wraper" key={item.name}>
                <div className="card_name">Name: {item.name}</div>
                <div className="card_height">Height: {item.height}</div>
                <div className="card_mass">Mass: {item.mass}</div>
            </div>
        )
    })
    console.log("resultWindow", searchList)
    return (
        <div className="result_window_wraper">
            {searchList}
        </div>
    )
    }
    
}
import './resultStyle.css'
import { useSelector, useDispatch } from 'react-redux'
import { deselectAll } from './tookitRedux/toolKitSlice'

export function DetailSelected () {
    const dispatch = useDispatch();
    const state = useSelector((state:{toolkit:{curPage:number, pages:[], selectedEl:[]}}) => {
        return state.toolkit
    });
    console.log(state.selectedEl)
    if(state.selectedEl.length - 1 > 0) {
        return(
            
        <div className="detail_selected_wraper">
            <div className="selected_text">Selected element:</div>
            <div className="count_selected_element">{state.selectedEl.length - 1}</div>
            <div className="btns_wraper">
                <button onClick={() => {dispatch(deselectAll())}}>Unselect all</button>
                <button>Download</button>
            </div>
        </div>
    )
    } else{
        return(
            <div className="detail_selected_wraper empty"></div>
        )
    }
    
}
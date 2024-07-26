import './resultStyle.css'
import { useSelector, useDispatch } from 'react-redux'
import { deselectAll } from './tookitRedux/toolKitSlice'
import { exportToCsv } from './helpers/fileSaver'
import { useContext } from 'react'
import { ThemeContent } from './helpers/themeChanger.tsx'

export function DetailSelected() {
    const { isdarkMode } = useContext(ThemeContent)
    const dispatch = useDispatch()
    const state = useSelector(
        (state: {
            toolkit: { curPage: number; pages: []; selectedEl: [] }
        }) => {
            return state.toolkit
        }
    )
    if (state.selectedEl.length - 1 > 0) {
        return (
            <div
                className={
                    isdarkMode
                        ? 'detail_selected_wraper'
                        : 'detail_selected_wraper detail_dark'
                }
            >
                <div className="selected_text">Selected element:</div>
                <div className="count_selected_element">
                    {state.selectedEl.length - 1}
                </div>
                <div className="btns_wraper">
                    <button
                        onClick={() => {
                            dispatch(deselectAll())
                        }}
                    >
                        Unselect all
                    </button>
                    <button
                        onClick={() => {
                            exportToCsv(state.selectedEl)
                        }}
                    >
                        Download
                    </button>
                </div>
            </div>
        )
    } else {
        return (
            <div
                className={
                    isdarkMode
                        ? 'detail_selected_wraper empty'
                        : 'detail_selected_wraper empty detail_dark'
                }
            ></div>
        )
    }
}

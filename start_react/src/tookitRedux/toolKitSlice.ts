import { createSlice } from "@reduxjs/toolkit";

const TKSlice = createSlice({
    name: "toolkit",
    initialState: {
        count: 0,
        pages:{'a': 'ff'},
        curPage:'',
    },
    reducers:{
        addPage(state,actions) {
            const name = `searchReq:${actions.payload.searchReq} pageNum:${actions.payload.pageNum}`
            console.log(actions.payload.pageInfo)
            if(!(name in state.pages)) state.pages[name] = actions.payload.pageInfo
        },
        changeCheckbox(state, actions){
            const newState = {...state}
            newState.pages[state.curPage].results.forEach((item:{name: string, isActive: boolean}) => {
                if(item.name === actions.payload){
                    item.isActive = !item.isActive
                }  
            });
            state.pages[state.curPage] = newState.pages[state.curPage];
        },
        setCurPage(state, actions) {
            state.curPage = actions.payload
        },
    }
})

export default TKSlice.reducer
export const {addPage, changeCheckbox, setCurPage} = TKSlice.actions
import { createSlice } from "@reduxjs/toolkit";

const TKSlice = createSlice({
    name: "toolkit",
    initialState: {
        count: 0,
        pages:{name: '5'},
        selectedEl:[{'name':''}],
        curPage:'',
    },
    reducers:{
        addPage(state,actions) {
            const name = `searchReq:${actions.payload.searchReq} pageNum:${actions.payload.pageNum}`
            if(!(name in state.pages)) state.pages[name] = actions.payload.pageInfo
        },
        setCurPage(state, actions) {
            state.curPage = actions.payload
        },
        selectElement(state, action) {
            const name = action.payload
            state.selectedEl.push(name)
        },
        deSelectElement(state,action) {
            console.log(action)
            state.selectedEl = state.selectedEl.filter(item => item.name !== action.payload.name)
        },
        deselectAll(state) {
            state.selectedEl = [{'name':''}]
        },
    }
})

export default TKSlice.reducer
export const {addPage, setCurPage, selectElement, deSelectElement, deselectAll} = TKSlice.actions
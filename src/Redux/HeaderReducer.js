const uppDateSearchText = 'UPP-DATE-SEARCH-TEXT'
const value = 'VALUE'
const Headerinitial = {
    NavBar:
    {
            
    },
    SearchElems:
    {
        inputValue: ''
    }
}

const HeaderReducer = (state = Headerinitial,action) => {
    switch (action.type) {
        case uppDateSearchText:
            let newState = { ...state }
            newState.SearchElems = { ...state.SearchElems }
            newState.SearchElems.inputValue = action.value
            return newState
        case value:
            let text = state.SearchElems.inputValue 
            return state
        default: return state
    }
}
export default HeaderReducer
export const valueActionCreator = ()=>({type:value})
export const uppDateSearchTextActionCreator = (value) => ({ type: uppDateSearchText, value: value })

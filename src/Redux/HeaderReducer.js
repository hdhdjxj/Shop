const uppDateSearchText = 'UPP-DATE-SEARCH-TEXT'

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
            state.SearchElems.inputValue = action.value
            return state
        default: return state
    }
}
export default HeaderReducer

export const uppDateSearchTextActionCreator = (value) => ({ type: uppDateSearchText, value: value })

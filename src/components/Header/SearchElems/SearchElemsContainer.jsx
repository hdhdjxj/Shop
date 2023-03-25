import { uppDateSearchTextActionCreator } from "../../../Redux/HeaderReducer";
import { valueActionCreator } from "../../../Redux/HeaderReducer";
import SearchElems from "./SearchElems";
import { connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        value: state.Header.SearchElems.inputValue
    }
}
let mapDispatchToProps =(dispatch) => {
    return {
        uppDateNewValueText: (text) => {
            let value = text
            let action = uppDateSearchTextActionCreator(value)
            dispatch(action)
        },
        valueText: () => {
            const action = valueActionCreator()
            let value = dispatch(action)
            return value
        }
    }
}
const SearchElemsContainer = connect(mapStateToProps,mapDispatchToProps)(SearchElems)
export default SearchElemsContainer

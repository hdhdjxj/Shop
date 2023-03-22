import React from "react";
import { uppDateSearchTextActionCreator } from "../../../Redux/HeaderReducer";
import SearchElems from "./SearchElems";
const SearchElemsContainer = (props) => {
    const uppDateNewValue = (text) => {
        let value = text
        let action = uppDateSearchTextActionCreator(value)
        props.dispatch(action)
    }
    return (<SearchElems uppDateNewValueText={uppDateNewValue} state={props.state} />)
}
export default SearchElemsContainer

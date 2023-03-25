import { connect } from "react-redux";
import SalesHits from "./SalesHits";
import { addOrderActionCreator } from "../../../../../Redux/MainReducer";
const mapStateToProps = (state) => {
    return { SalesHitsData: state.Main.SalesHits.SalesHitsData}
    
}
const mapDispatchToProps = (dispatch) => {
    return {
        addOrderFunc: (img,heading,cost) => {
            let action = addOrderActionCreator(img,heading, cost)
            dispatch(action)
    }}
}
const SalesHitsContainer = connect(mapStateToProps, mapDispatchToProps)(SalesHits)
export default SalesHitsContainer
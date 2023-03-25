import React from "react";
import { connect } from "react-redux";
import Orders from "./Orders";
import { delOrderActionCreator } from "../../../../Redux/MainReducer";
const mapStateToProps = (state) => {
    return { state: state}
    
}
let mapDispatchToProps =(dispatch) => {
    return {
        delOlder: (id) => {
            let action = delOrderActionCreator(id)
            dispatch(action)
        }
    }
}
const OrdersContainer = connect(mapStateToProps, mapDispatchToProps)(Orders)
export default OrdersContainer
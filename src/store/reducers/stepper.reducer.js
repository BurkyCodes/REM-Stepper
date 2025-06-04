const stepperReducer = (state = null, action) => {
    switch(action.type){
        case "SET_WASTE_TYPES":
            return action.wasteTypes
        default:
            return state;
    }
}

export default stepperReducer;
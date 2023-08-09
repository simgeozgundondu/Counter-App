import * as actionTypes from "./actionTypes"

export const increaseCounter=()=>({ //bir fonksiyon return ediyorum
    type:actionTypes.INCREASE_COUNTER,
    payload:1
})

export const decreaseCounter=()=>({ 
    type:actionTypes.DECREASE_COUNTER,
    payload:1
})

export const increaseByTwoCounter=()=>({ //bir fonksiyon return ediyorum
    type:actionTypes.INCREASE_BY_TWO_COUNTER,
    payload:2
})
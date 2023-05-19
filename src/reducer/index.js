import { TITLE } from "../action/types";
const initialState = {
    title: "Untitled Document",
}

export default function reducer(state=initialState, action) {
    const { data, type } = action || {};
    
    switch(type){
        case TITLE:
            return {
                ...state,
                title: data || "",
            }
        default:
            return {
                ...state,
            }
    }
}
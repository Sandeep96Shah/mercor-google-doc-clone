import { TITLE, SHOW_MODAL } from "../action/types";
const initialState = {
    title: "Untitled Document",
    showModal: false,
}

export default function reducer(state=initialState, action) {
    const { data, type } = action || {};

    switch(type){
        case TITLE:
            return {
                ...state,
                title: data || "",
            }
        case SHOW_MODAL:
            return {
                ...state,
                showModal: data,
            }
            
        default:
            return {
                ...state,
            }
    }
}
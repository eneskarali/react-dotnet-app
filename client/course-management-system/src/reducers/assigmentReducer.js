import {
    GET_ASSIGMENTS_ID_ERROR, GET_ASSIGMENTS_ID_SUCCESS,
    PUT_ASSIGMENT_SUCCESS, PUT_ASSIGMENT_ERROR
} from "../actions/assigmentAction";

const initState = {
    isSuccess: false,
    isPut: false,
    error: false,
    errorMessage: '',
    assigments: [],
}

const assigmentReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_ASSIGMENTS_ID_SUCCESS:
            return {
                ...state,
                isSuccess: true,
                isPut: false,
                error: false,
                errorMessage: '',
                assigments: action.assigments,
            };
        case GET_ASSIGMENTS_ID_ERROR:
            return {
                ...state,
                isSuccess: false,
                isPut: false,
                error: true,
                errorMessage: action.error,
                assigments: [],
            };
        case PUT_ASSIGMENT_SUCCESS:
            return {
                ...state,
                isSuccess: true,
                isPut: true,
                error: false,
                errorMessage: '',
                assigments: action.status,
            };
        case PUT_ASSIGMENT_ERROR:
            return {
                ...state,
                isSuccess: false,
                isPut: false,
                error: true,
                errorMessage: action.error,
                assigments: [],
            };

        default:
            return state;
    }
}


export default assigmentReducer

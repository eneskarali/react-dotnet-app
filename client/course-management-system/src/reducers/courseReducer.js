import {
    GET_COURSES_SUCCESS, GET_COURSES_ERROR,
    PUT_COURSE_SUCCESS, PUT_COURSE_ERROR,
    GET_COURSE_SUCCESS, GET_COURSE_ERROR
} from "../actions/courseAction";

const initState = {
    isSuccess: false,
    isGet: false,
    isPut: false,
    error: false,
    errorMessage: '',
    courses: [],
    course: []
}

const courseReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_COURSES_SUCCESS:
            return {
                ...state,
                isSuccess: true,
                isGet: false,
                isPut: false,
                error: false,
                errorMessage: '',
                courses: action.courses,
                course: []
            };
        case GET_COURSES_ERROR:
            return {
                ...state,
                isSuccess: false,
                isGet: false,
                isPut: false,
                error: true,
                errorMessage: action.error,
                courses: [],
                course: []
            };
        case PUT_COURSE_SUCCESS:
            return {
                ...state,
                isSuccess: true,
                isGet: false,
                isPut: true,
                error: false,
                errorMessage: action.status,
                courses: [],
                course: []
            };
        case PUT_COURSE_ERROR:
            return {
                ...state,
                isSuccess: false,
                isGet: false,
                isPut: false,
                error: true,
                errorMessage: action.error,
                courses: [],
                course: []
            };
        case GET_COURSE_SUCCESS:
            return {
                ...state,
                isSuccess: false,
                isGet: true,
                isPut: false,
                error: false,
                errorMessage: '',
                courses: [],
                course: action.course
            };
        case GET_COURSE_ERROR:
            return {
                ...state,
                isSuccess: false,
                isGet: false,
                isPut: false,
                error: true,
                errorMessage: action.error,
                courses: [],
                course: []
            };

        default:
            return state;
    }
}


export default courseReducer

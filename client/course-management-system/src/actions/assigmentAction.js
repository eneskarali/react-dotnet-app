import assigmentService from '../services/assigmentService'

export const GET_ASSIGMENTS_ID_SUCCESS = "GET_ASSIGMENTS_ID_SUCCESS";
export const GET_ASSIGMENTS_ID_ERROR = "GET_ASSIGMENTS_ID_ERROR";
export const PUT_ASSIGMENT_SUCCESS = "PUT_ASSIGMENT_SUCCESS";
export const PUT_ASSIGMENT_ERROR = "PUT_ASSIGMENT_ERROR";


const getAssigmentsIdSuccsess = assigments => {
    return {
        type: GET_ASSIGMENTS_ID_SUCCESS,
        assigments
    };
}

const getAssigmentsIdError = error => {
    return {
        type: GET_ASSIGMENTS_ID_ERROR,
        error
    };
}
const putAssigmentSuccsess = status => {
    return {
        type: PUT_ASSIGMENT_SUCCESS,
        status
    };
}

const putAssigmentError = error => {
    return {
        type: PUT_ASSIGMENT_ERROR,
        error
    };
}

export const getAsssigmentsByCourseId = (id) => {
    return dispatch => {
        assigmentService.getAssigmentsByCourseId(id)
            .then(res => {
                res.status === 200
                    ? dispatch(getAssigmentsIdSuccsess(res.data))
                    : dispatch(getAssigmentsIdError(res.status))
            })
            .catch(err => {
                dispatch(getAssigmentsIdError(err))
            })
    }
}

export const putAssigment = (title, description, courseId) => {
    var data = {
        "Title": title,
        "Description": description,
        "CourseId": courseId
    }
    return dispatch => {
        assigmentService.putAssigment(data)
            .then(res => {
                res.status === 201
                    ? dispatch(putAssigmentSuccsess(res.status))
                    : dispatch(putAssigmentError(res.status))
            })
            .catch(err => {
                dispatch(putAssigmentError(err))
            })
    }
}
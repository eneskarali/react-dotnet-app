import courseService from '../services/courseService'

export const GET_COURSES_SUCCESS = "GET_COURSES_SUCCESS";
export const GET_COURSES_ERROR = "GET_COURSES_ERROR";
export const GET_COURSE_SUCCESS = "GET_COURSE_SUCCESS";
export const GET_COURSE_ERROR = "GET_COURSE_ERROR";
export const PUT_COURSE_SUCCESS = "PUT_COURSE_SUCCESS";
export const PUT_COURSE_ERROR = "PUT_COURSE_ERROR";

const getCoursesSuccsess = courses => {
    return {
        type: GET_COURSES_SUCCESS,
        courses
    };
}

const getCoursesError = error => {
    return {
        type: GET_COURSES_ERROR,
        error
    };
}

const putCourseSuccsess = success => {
    return {
        type: PUT_COURSE_SUCCESS,
        success
    };
}

const putCourseError = error => {
    return {
        type: PUT_COURSE_ERROR,
        error
    };
}

const getCourseSuccsess = course => {
    return {
        type: GET_COURSE_SUCCESS,
        course
    };
}

const getCourseError = error => {
    return {
        type: GET_COURSE_ERROR,
        error
    };
}

export const getCourses = () => {
    return dispatch => {
        courseService.getCourses()
            .then(res => {
                res.status === 200
                    ? dispatch(getCoursesSuccsess(res.data))
                    : dispatch(getCoursesError(res.status))
            })
            .catch(err => {
                dispatch(getCoursesError(err))
            })
    }
}

export const getCourse = (id) => {
    return dispatch => {
        courseService.getCourse(id)
            .then(res => {
                res.status === 200
                    ? dispatch(getCourseSuccsess(res.data))
                    : dispatch(getCourseError(res.status))
            })
            .catch(err => {
                dispatch(getCourseError(err))
            })
    }
}

export const putCourse = (courseName, description) => {
    var data = {
        'Name': courseName,
        'Description': description
    }
    return dispatch => {
        courseService.putCourse(data)
            .then(res => {
                res.status === 201
                    ? dispatch(putCourseSuccsess(res.status))
                    : dispatch(putCourseError(res.status))
            })
            .catch(err => {
                dispatch(putCourseError(err))
            })
    }
}
import axios from 'axios';

const getCourses = () => {
    return axios.get("api/Course")
        .then(res => {
            return res
        })
        .catch(err => {
            console.log(err)
        })
}

const getCourse = (id) => {
    return axios.get("api/Course/"+id)
        .then(res => {
            return res
        })
        .catch(err => {
            console.log(err)
        })
}

const putCourse = (data) => {
    return axios.post("api/Course", data)
        .then(res => {
            return res
        })
        .catch(err => {
            console.log(err)
        })
}

const courseService = {
    getCourses,
    putCourse,
    getCourse
};

export default courseService;

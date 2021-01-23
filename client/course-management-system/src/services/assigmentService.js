import axios from 'axios';

const getAssigmentsByCourseId = (id) => {
    return axios.get("api/Assigment/"+id)
        .then(res => {
            return res
        })
        .catch(err => {
            console.log(err)
        })
}

const putAssigment = (data) => {
    return axios.post("api/Assigment", data)
        .then(res => {
            return res
        })
        .catch(err => {
            console.log(err)
        })
}

const assigmentService = {
    getAssigmentsByCourseId,
    putAssigment

};

export default assigmentService;
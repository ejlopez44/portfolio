import axios from 'axios';

export default {
    getAllProjects: function () {
        return axios.get('/api/projects')
            .then(res => {
                // console.log(res.data)
                return res.data
            }).catch(err => console.log(err))
    },
    deleteProject: function (id) {
        return axios.delete(`/api/project/${id}`)
            .then(res => {
                // console.log(res.data)
                return alert("Project successfully deleted!")
            }).catch(err => console.log(err))
    },
    findProject: function (id) {
        return axios.get(`/api/project/${id}`)
            .then(res => {
                return res.data
            }).catch(err => console.log(err))
    },
    editProject: function (id, data) {
        return axios.put(`/api/project/${id}`, data)
            .then(res => {
                return alert('Project has been successfully updated')
            }).catch(err => console.log(err))
    },
    addProject: function (data) {
        return axios.post(`/api/project`, data)
            .then(res => {
                return window.location.href = './admin'
            }).catch(err => console.log(err))
    }
}
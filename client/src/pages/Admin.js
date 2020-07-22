import React, { useState, useEffect } from 'react';
import API from '../utils/API';
import AdminRow from '../components/AdminRow/AdminRow';
import AdminHeader from '../components/AdminHeader/AdminHeader'

function Admin() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        API.getAllProjects().then(data => {
            setProjects(data)
        })
    }, [])

    // NEED TO DEFINE ONCLICK FOR DELETE BUTTON AND PASS IT AS PROPS TO ADMINROW
    async function deleteBtn(event, id) {
        event.preventDefault();
        if (window.confirm(`Are you sure you want to delete project ${id}?`)) {
            await API.deleteProject(id)
            window.location.reload();
        } else {
            return
        }
    }

    return (
        <div className="row">
            <div className="col-sm-1 col-md-2 col-lg-3"></div>
            {/* End Spacing Div */}
            {/* Default view needs a button to add a project, to list all projects and have buttons to edit or delete each project */}
            <ul className="list-group col-sm-10 col-md-8 col-lg-6">
                <AdminHeader />
                {/* Need to Map through projects here */}
                {projects.map(project => {
                    return <AdminRow key={project.id} title={project.title} id={project.id} deleteBtn={deleteBtn} />
                })}
            </ul>
            {/* End of Table */}
            <div className="col-sm-1 col-md-2 col-lg-3"></div>
            {/* End Spacing Div */}
        </div>
    )
}
export default Admin;
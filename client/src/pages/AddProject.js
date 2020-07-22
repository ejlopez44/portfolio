import React, { useState, useEffect } from 'react';
import ProjForm from '../components/ProjForm/ProjForm';
import Col from '../components/Col/Col';
import API from '../utils/API';

function AddProject() {

    const [project, setProject] = useState({
        title: "",
        photo_url: "",
        description: "",
        tech: "",
        github_url: "",
        deployed_url: "",
    })

    // const {id} = useParams() is another way if using react router dom to get the param id // import { useParams } from "react-router-dom";

    // ONCLICK FOR ADD BUTTON - Relatively boilerplate (This is repeated slightly from edit page)
    function handleSubmit(event) {
        event.preventDefault()
        let newProj = {
            title: project.title,
            photo_url: project.photo_url,
            description: project.description,
            tech: project.tech,
            github_url: project.github_url,
            deployed_url: project.deployed_url,
        }
        console.log(newProj)
        // API.editProject(project.id, updates)
        API.addProject(newProj)
    }


    // EVENT CHANGE HANDLER - Relatively boilerplate
    function handleInputChange(event) {
        const { name, value } = event.target;
        setProject({ ...project, [name]: value })
    };

    // RENDER THIS JAWN
    return (
        <div className="row">
            <Col />
            <div className="col-sm-10 col-md-8 col-lg-6">
                <h4>Add Project Listing</h4>
                <br />
                {/* id="editProjectForm" */}
                <ProjForm
                    key={project.id}
                    title={project.title}
                    photo_url={project.photo_url}
                    description={project.description}
                    tech={project.tech}
                    github_url={project.github_url}
                    deployed_url={project.deployed_url}
                    orderingIndex={project.orderingIndex === null ? "" : project.orderingIndex}
                    handleInputChange={handleInputChange}
                    handleSubmit={handleSubmit}
                />
            </div>
            <Col />
        </div>
    )
}
export default AddProject;
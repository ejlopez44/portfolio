import React, { useState, useEffect } from 'react';
import ProjForm from '../components/ProjForm/ProjForm';
import Col from '../components/Col/Col';
import API from '../utils/API';

function EditProject(props) {

    const [project, setProject] = useState({})

    // const {id} = useParams() is another way if using react router dom to get the param id // import { useParams } from "react-router-dom";
    useEffect(() => {
        API.findProject(props.match.params.id)
            .then(data => setProject(data))
            .catch(err => console.log(err));
    }, [])

    // ONCLICK FOR EDIT BUTTON - Relatively boilerplate
    function handleSubmit(event) {
        event.preventDefault()
        let updates = {
            title: project.title,
            photo_url: project.photo_url,
            description: project.description,
            tech: project.tech,
            github_url: project.github_url,
            deployed_url: project.deployed_url,
            orderingIndex: project.orderingIndex
        }
        console.log(updates)
        API.editProject(project.id, updates)
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
                <h4>Edit Project Listing</h4>
                <br />
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
export default EditProject;
import React, { useState, useEffect } from 'react';
import ProjCard from '../components/ProjCard/ProjCard'
import API from '../utils/API'

function Portfolio() {

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        API.getAllProjects().then(data => {
            setProjects(data)
        })
    }, [])

    return (
        <div className="row">
            <div className="col-12">
                <h1>Portfolio</h1>
                <br />
            </div>
            {/* Table of portfolio items to map through, set state to render all of these call ProjCard*/}
            {projects.map(project => {
                return <ProjCard
                    key={project.id}
                    title={project.title}
                    photo_url={project.photo_url}
                    description={project.description}
                    tech={project.tech}
                    github_url={project.github_url}
                    deployed_url={project.deployed_url} />
            })}
        </div>
    )
}
export default Portfolio;
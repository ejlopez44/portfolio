import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProjCard from '../components/ProjCard/ProjCard'

function Portfolio() {

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        getProjects()
    }, [])

    function getProjects() {
        return axios.get(
            '/api/projects'
        ).then(res => {
            console.log(res.data)
            setProjects(res.data)
        }).catch(err => console.log(err))
    }

    return (
        <div className="row">
            <div className="col-12">
                <h1>Portfolio</h1>
                {/* <br /> */}
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
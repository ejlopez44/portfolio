import React from 'react';

function ProjForm(props) {


    return (
        // {/* id="editProjectForm" */}
        <form data-id={props.id}>
            <div className="form-group">
                <label htmlFor="title">Project Title: </label>
                <input value={props.title} onChange={props.handleInputChange} type="text" className="form-control" id="title" name='title' />
            </div>
            <div className="form-group">
                <label htmlFor="photo_url">Photo URL:</label>
                <input value={props.photo_url} onChange={props.handleInputChange} type="url" className="form-control" id="photo_url" name="photo_url" />
            </div>
            <div className="form-group">
                <label htmlFor="deployed_url">Deployed URL:</label>
                <input value={props.deployed_url} onChange={props.handleInputChange} type="url" className="form-control" id="deployed_url"
                    name="deployed_url" />
            </div>
            <div className="form-group">
                <label htmlFor="github_url">GitHub URL:</label>
                <input value={props.github_url} onChange={props.handleInputChange} type="url" className="form-control" id="github_url"
                    name="github_url" />
            </div>
            <div className="form-group">
                <label htmlFor="description">Description:</label>
                <textarea className="form-control" onChange={props.handleInputChange} id="description" name='description'
                    rows="5" value={props.description}></textarea>
            </div>
            <div className="form-group">
                <label htmlFor="tech">Technologies:</label>
                <textarea className="form-control" onChange={props.handleInputChange} id="tech" name='tech' rows="2" value={props.tech}></textarea>
            </div>
            <div className="form-group">
                <label htmlFor="orderingIndex">Display Index:</label>
                {/*  id="orderingIndex" */}
                <input value={props.orderingIndex} onChange={props.handleInputChange} type="number" className="form-control"
                    name="orderingIndex" />
            </div>
            {/* id='editProject'*/}
            <button onClick={props.handleSubmit} data-id={props.id} type="button"
                className="btn btn-secondary btn-lg btn-block">
                Submit Project</button>
        </form>
    )
}
export default ProjForm;

// Add form
{/* <div className="col-sm-10 col-md-8 col-lg-6">
    <h4>Add to Portfolio</h4>
    <br></br>
    <form id="postProjectForm">
        <div className="form-group">
            <label htmlFor="title">Project Title:</label>
            <input type="text" className="form-control" id="title" name='title' />
        </div>
        <div className="form-group">
            <label htmlFor="photo_url">Photo URL:</label>
            <input type="url" className="form-control" id="photo_url" name="photo_url" />
        </div>
        <div className="form-group">
            <label htmlFor="deployed_url">Deployed URL:</label>
            <input type="url" className="form-control" id="deployed_url" name="deployed_url" />
        </div>
        <div className="form-group">
            <label htmlFor="github_url">GitHub URL:</label>
            <input type="url" className="form-control" id="github_url" name="github_url" />
        </div>
        <div className="form-group">
            <label htmlFor="description">Description:</label>
            <textarea className="form-control" id="description" name='description' rows="5"></textarea>
        </div>
        <div className="form-group">
            <label htmlFor="tech">Technologies:</label>
            <textarea className="form-control" id="tech" name='tech' rows="2"></textarea>
        </div>
        <button id="postProject" type="submit" className="btn btn-secondary btn-lg btn-block">Submit
Project</button>
    </form>
</div> */}
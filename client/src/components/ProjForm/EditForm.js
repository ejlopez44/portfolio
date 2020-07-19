import React from 'react';

function EditForm(props) {

    return (
        <div className="row">
            <div className="col-sm-1 col-md-2 col-lg-3"></div>
            {/* {{!-- Default view needs a button to add a project, to list all projects and have buttons to edit or delete each project --}} */}
            <div className="col-sm-10 col-md-8 col-lg-6">
                <h4>Edit Project Listing</h4>
                <br />
                <form id="editProjectForm" data-id={props.id}>
                    <div className="form-group">
                        <label for="title">Project Title: {props.title}</label>
                        <input value='{{ props.title }}' type="text" className="form-control" id="title" name='title' />
                    </div>
                    <div className="form-group">
                        <label for="photo_url">Photo URL:</label>
                        <input value={props.photo_url} type="url" className="form-control" id="photo_url" name="photo_url" />
                    </div>
                    <div className="form-group">
                        <label for="deployed_url">Deployed URL:</label>
                        <input value={props.deployed_url} type="url" className="form-control" id="deployed_url"
                            name="deployed_url" />
                    </div>
                    <div className="form-group">
                        <label for="github_url">GitHub URL:</label>
                        <input value={props.github_url} type="url" className="form-control" id="github_url"
                            name="github_url" />
                    </div>
                    <div className="form-group">
                        <label for="description">Description:</label>
                        <textarea className="form-control" id="description" name='description'
                            rows="5">{props.description}</textarea>
                    </div>
                    <div className="form-group">
                        <label for="tech">Technologies:</label>
                        <textarea className="form-control" id="tech" name='tech' rows="2">{props.tech}</textarea>
                    </div>
                    <div className="form-group">
                        <label for="orderingIndex">Display Index:</label>
                        <input value={props.orderingIndex} type="number" className="form-control" id="orderingIndex"
                            name="orderingIndex" />
                    </div>
                    <button id='editProject' data-id={props.id} type="button"
                        className="btn btn-secondary btn-lg btn-block">Edit
                    Project</button>
                </form>
            </div>
            <div className="col-sm-1 col-md-2 col-lg-3"></div>
        </div>
    )
}
export default EditForm;
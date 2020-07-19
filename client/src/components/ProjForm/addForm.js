<div className="col-sm-10 col-md-8 col-lg-6">
    <h4>Add to Portfolio</h4>
    <br></br>
    <form id="postProjectForm">
        <div className="form-group">
            <label for="title">Project Title:</label>
            <input type="text" className="form-control" id="title" name='title' />
        </div>
        <div className="form-group">
            <label for="photo_url">Photo URL:</label>
            <input type="url" className="form-control" id="photo_url" name="photo_url" />
        </div>
        <div className="form-group">
            <label for="deployed_url">Deployed URL:</label>
            <input type="url" className="form-control" id="deployed_url" name="deployed_url" />
        </div>
        <div className="form-group">
            <label for="github_url">GitHub URL:</label>
            <input type="url" className="form-control" id="github_url" name="github_url" />
        </div>
        <div className="form-group">
            <label for="description">Description:</label>
            <textarea className="form-control" id="description" name='description' rows="5"></textarea>
        </div>
        <div className="form-group">
            <label for="tech">Technologies:</label>
            <textarea className="form-control" id="tech" name='tech' rows="2"></textarea>
        </div>
        <button id="postProject" type="submit" className="btn btn-secondary btn-lg btn-block">Submit
Project</button>
    </form>
</div>
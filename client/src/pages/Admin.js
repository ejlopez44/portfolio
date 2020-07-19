import React from 'react';

function Admin() {

    return (
        <div className="row">
            <div className="col-sm-1 col-md-2 col-lg-3"></div>
            {/* Default view needs a button to add a project, to list all projects and have buttons to edit or delete each project */}
            <ul className="list-group col-sm-10 col-md-8 col-lg-6">
                <li className="list-group-item list-group-item-dark d-flex justify-content-between">
                    <a className="font-weight-bold">Portfolio Projects</a>
                    <a className="btn btn-success btn-sm" href="/add-project">Add Project</a>
                </li>
                {/* Need to Map through projects here */}
                {/* <li className="list-group-item d-flex justify-content-between">
                    <a>{{ this.title }}</a>
                    <div>
                        <a className="btn btn-light btn-sm editProj" href="/edit/{{this.id}}">Edit</a>
                        <button type="button" className="btn btn-danger btn-sm delProj" data-id="{{this.id}}">Delete</button>
                    </div>
                </li> */}
            </ul>
            {/* End of group */}
            <div className="col-sm-1 col-md-2 col-lg-3"></div>
        </div>
    )
}
export default Admin;
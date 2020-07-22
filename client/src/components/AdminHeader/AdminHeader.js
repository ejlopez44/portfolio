import React from 'react';

function AdminHeader() {
    return (
        <li className="list-group-item list-group-item-dark d-flex justify-content-between">
            <a className="font-weight-bold">Portfolio Projects</a>
            <a className="btn btn-success btn-sm" href="/add-project">Add Project</a>
        </li>
    )
}
export default AdminHeader;
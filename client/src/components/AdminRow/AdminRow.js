import React from 'react';

function AdminRow(props) {
    return (
        <li className="list-group-item d-flex justify-content-between">
            <a>{props.title}</a>
            <div>
                <a className="btn btn-light btn-sm editProj" href={`/edit/${props.id}`}>Edit</a>
                <button type="button" className="btn btn-danger btn-sm delProj" onClick={(e) => props.deleteBtn(e, props.id)}>Delete</button>
            </div>
        </li>
    )
}
export default AdminRow;
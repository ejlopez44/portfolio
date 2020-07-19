import React from 'react';
import './style.css';

function ProjCard(props) {

    return (
        <div className="col-sm-12 col-md-12 col-lg-6 text-center">
            <h4>{props.title}</h4>
            <img className="portImg" src={props.photo_url} />
            <div className="row gallery">
                <div className="col-12">
                    <h5>Description</h5>
                    <p>{props.description}</p>
                </div>
                <div className="col-12">
                    <h5>Project Technologies</h5>
                    <p>{props.tech}</p>
                    <a href={props.github_url} target="_blank">View on
                Github</a><br />
                    <a href={props.deployed_url} target="_blank">View
                Deployed App</a>
                </div>
            </div>
        </div>
    )
}
export default ProjCard;
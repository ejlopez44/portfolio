import React from 'react';

function Index() {

    return (
        <div className="row tileDesign">
            <div className="col-12 tileHeader">
                {/* // <h1>About Me</h1> */}
            </div>
            <div className="col-xs-12 col-lg-4">
                <img className="float-left" id="aboutMeImg" src="assets/Images/myself.png" alt="Photo of Ernesto" />
            </div>
            <div className="col-xs-12 col-lg-8">
                <div>
                    <h1>About Me</h1>
                    <p>My name is Ernesto Lopez. I'm learning to become a developer with the help of some nice organization
                at University of Penn. So far things are looking up man. </p>
                    <p>When I'm not working or studying for my coding course, I'm usually playing xbox because I'm couped up
                in bad weather or out riding around on two-wheels. I enjoy motorcycles and bicycles.</p>
                    <p>
                        <a href="https://github.com/ejlopez44" target="_blank">Visit me on GitHub</a><br />
                        <a href="https://www.linkedin.com/in/ejlopez44/" target="_blank">Connect with me on
                    LinkedIn</a><br />
                        <a href="assets/documents/ErnestoLopezResume.pdf" target="_blank">View My Resume</a><br />
                        <a href="/contact">Contact me</a>
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Index;
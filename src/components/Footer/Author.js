import React from 'react';

const Author = () => {
    return (
        <div className="container col-lg-3 col-md-6 col-sm-6 col-12 gap-1 d-flex flex-wrap flex-column align-content-center justify-content-center mb-5">
            <div className="d-flex flex-column gap-1">
                <h2 className="text-center">Hi! I am Bria</h2>
                <img className="img-fluid" src="http://www.bshwork.me/img/briaa.jpg" alt="bria saunders-hall" />
            </div>

            <div className=" badge bg-success fs-5">
                <span>Alive</span>
            </div>

            <div className="content">
                <div className="">
                    <span className="fw-bold">Gender: </span>
                    <span>Female</span>
                </div>
                <div className="">
                    <span className="fw-bold">Location: </span>
                    <span>Washington, DC</span>
                </div>
                <div className="">
                    <span className="fw-bold">Origin: </span>
                    <span>Washington, DC</span>
                </div>
                <div className="">
                    <span className="fw-bold">Species: </span>
                    <span>Human</span>
                </div>
                <div className=" badge bg-info fs-6">
                    <a href="http://www.bshwork.me/" target="_blank">Visit My Website</a>
                </div>
            </div>
        </div>
    );
}

export default Author;

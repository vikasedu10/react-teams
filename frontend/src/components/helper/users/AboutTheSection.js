import React from 'react'

export const AboutTheSection = () => {
    return (
        <div className="about-section">
            <p>
                <a className="btn btn-info btn-sm" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                    About the section
                </a>
            </p>
            <div className="collapse" id="collapseExample">
                <div className="card card-body alert alert-primary">
                    <strong>This is 'Ask' section. This implements the CRUD operations for RESTful API created using Golang. Golang API endpoints are using resolver functions to execute required logic & those resolver functions connect with MongoDB to perform the required CRUD Operations.</strong>
                    <strong className='py-2'>Below is/are the pre-requisites:</strong>
                    <ul>
                        <li>The API should be running and serving all expected enpoints in localhost at port 6001, i.e., http://localhost:6001. If API is not being served at this port, change URL at /teams/backend-mongo-db-api/server.go file.</li>
                        <li>Mongo DB should be up and running in localhost at port 27017. mongodb://localhost:27017</li>
                        <li>If setup is modified/online Mongo DB used, please change the config URL in the code under teams/bakend-mongo-db-api/.env file.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

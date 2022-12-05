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
                    <strong>This is 'Feed' section. The aim of this section is to implement CRUD operations with state variable using Redux-Toolkit.
                        <br />
                        As of now, only Retreive and Delete functionality is implemented. The data is being fetched from local variable.
                    </strong>
                </div>
            </div>
        </div>
    )
}

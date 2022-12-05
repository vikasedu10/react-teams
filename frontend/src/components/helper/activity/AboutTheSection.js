import React from 'react'

export const AboutTheSection = () => {
    return (
        <div className="about-section p-2">
            <p>
                <a className="btn btn-info btn-sm" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                    About the section
                </a>
            </p>
            <div className="collapse" id="collapseExample">
                <div className="card card-body alert alert-primary">
                    <strong>This is 'Activity' section. In this section, Create, Retrive, _, Delete functionality is implemented.<br />
                        Data is getting fetched from local variable and mainly props was used to implement the functionality
                    </strong>
                </div>
            </div>
        </div>
    )
}

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
                    <strong>This is 'Chat' section. The aim of this section is to use basic React features to create a chat like interface.
                        <br />
                        I have used props, variables, hooks, React-router-dom@v6 and some css to design this page.<br />
                        Reason for this section was to implement React from scratch.
                    </strong>
                </div>
            </div>
        </div>
    )
}

import React from 'react'
import './Admin.scss'
import AboutAdmin from './AboutAdmin'
import SocialAdmin from './SocialAdmin'
import PhotographyAdmin from './PhotographyAdmin'
import EventsAdmin from './EventsAdmin'


const Admin = () => {
    return (
        <div>
            <div className="main-container">
                <h2 className="title">Admin forms:</h2>
                <div className="admin-center">


                    <h4 className="admin-title">About Component</h4>
                    <AboutAdmin />


                    <br />
                    <br />
                    <hr style={{ border: "1px solid lightgray" }}></hr>
                    <br />


                    <h4 className="admin-title">Social Component</h4>
                    <SocialAdmin />


                    <br />
                    <br />
                    <hr style={{ border: "1px solid lightgray" }}></hr>
                    <br />


                    <h4 className="admin-title">Events Component</h4>
                    <EventsAdmin />

                    <br />
                    <br />
                    <hr style={{ border: "1px solid lightgray" }}></hr>
                    <br />


                    <h4 className="admin-title">Photography Component</h4>
                    <PhotographyAdmin />


                    <br />
                </div>
            </div>
        </div>
    )
}

export default Admin
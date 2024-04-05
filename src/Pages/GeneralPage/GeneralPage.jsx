import React from 'react'
import Profile from '../../Profile/Profile'
import Servere from '../../Servere/Servere'
import User from '../../User/User'

function GeneralPage() {
  return (
    <div >
        <div className="row g-5 p-3  ">
            <div className="col-lg-4 col-md-7 col-sm-7">
                <Profile/>
            </div>
            <div className="col-lg-4 col-md-7 col-sm-7">
                <Servere/>
            </div>
            <div className="col-lg-4 col-md-7 col-sm-7">
                <User/>
            </div>
        </div>
    </div>
  )
}

export default GeneralPage
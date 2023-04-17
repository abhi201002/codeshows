import React from 'react'
import ProfImg from './ProfImg'
import './profile.css'
import ProfAct from './ProfAct'
import Prof from './Prof'

function Profile() {
  return (
    <div className="profile">
        <ProfImg/>
        <ProfAct/>
        <Prof/>
    </div>
  )
}

export default Profile
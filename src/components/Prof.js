import React, { useState } from 'react'
import './prof.css'

function Prof() {
  const [Data,setData] = useState('')
  fetch('https://codeforces.com/api/user.info?handles=DmitriyH;Fefer_Ivan')
  .then((res) =>{
    return res.json
  })
  .then((Data) =>{
    if(Data.cod == 404){
      alert('Not Valid!!')
    }
    else{
      setData(Data)
    }
  }
  )
  return (
    <div className="prof">
        <h2>Your Friends</h2>
        <hr />
    </div>
  )
}

export default Prof
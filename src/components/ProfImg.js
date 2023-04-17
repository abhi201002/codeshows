import React, { useEffect, useState } from 'react'
import './profimg.css'

function ProfImg() {
  const [Data,setData] = useState('')
  const [Text,setText] = useState('')
  const [ID,setid] = useState('')
  const update = ()=>{
    setid(Text)
  }
  useEffect(() =>{
    fetch('https://codeforces.com/api/user.info?handles='+{ID})
    .then((res) =>{
      return res.jsonp();
    })
    .then((Data) =>{
      console.log(Data);
      if(Data.status != 'OK'){
        alert('Not Valid!!');
      }
      else{
        setData(Data)
      }
    }
    )
  },[])
  return (
    <div className="profimg">
      <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="" />
      <hr />
      <div className="profile_info">
        <div className="details">
          <div>Name: </div>
          <div>Abhishek Gupta</div>
        </div>
        <div className="details">
          <div>Codeforces ID: </div>
          <div>abhi_201002</div>
        </div>
        <div className="details">
          <div>CodeForces Rating: </div>
          <div>2002</div>
        </div>
        <div className="details">
          <div>Country: </div>
          <div>India</div>
        </div>
      </div>
      <hr />
      <h5>Search Your Friends on codeforces</h5>
      <input type="text" value = {Text} onChange = {(e) => {setText(e.target.value)}}/>
      <button onClick={() => {update()}}>Search</button>
      {
        Data ?
        (
          <>
          <div className="profile_info">
            <div className="details">
              <div>Name: </div>
              <div>{Data[0]?.firstName} {Data[0]?.lastName}</div>
            </div>
            <div className="details">
              <div>Codeforces ID: </div>
              <div>{Data[0]?.handle}</div>
            </div>
            <div className="details">
              <div>CodeForces Rating: </div>
              <div>{Data[0]?.rating}</div>
            </div>
            <div className="details">
              <div>Country: </div>
              <div>{Data[0]?.country}</div>
            </div>
          </div>
          </>
        )
        :
        (
          ""
        )
      }
    </div>
  )
}

export default ProfImg
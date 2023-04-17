import React from 'react'

export default function Content() {
  return (
    <>
    <div className="container mt-4">
      <div className="row">
        <div className="col mx-5" style={{display:"flex",width:"50%",boxShadow:"0 0 10px rgba(0, 0, 0, 0.2)", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
        <h1 style={{textAlign:"center", color:"white",fontFamily:"Georgia, serif"}}>About</h1>
            <img className="col-5" src="https://codeshows.github.io/images/logo.png" style={{marginBottom: "10px"}}/>
            <div className="col " style={{textAlign:"center",fontFamily: 'Georgia, serif', marginBottom: '60%',marginTop:"20%"  }}>
              <div style={{color:"white"}}>
                Codeshows is a coding club of MNIT Jaipur.
                Codeshow aims to establish a coding culture on campus, reaching every student passionate about coding. The club's motto is to Create-Build-Innovate. Start scrolling and learn more about codeshows.
              </div>
            </div>
        </div>
        <div className="col me-5" style={{display:"flex",width:"50%",boxShadow:"0 0 10px rgba(0, 0, 0, 0.2)"}}>
        <div className='col'>
        <h1 className="row" style={{textAlign:"center", color:"white",fontFamily:"Georgia, serif"}}>Latest Updates</h1>
        <ul className="list-group list-group-flush">
        <li className="row list-group-item m-4">An item</li>
        <li className="row list-group-item m-4">A second item</li>
        <li className="row list-group-item m-4">A third item</li>
        <li className="row list-group-item m-4">A fourth item</li>
        <li className="row list-group-item m-4">And a fifth one</li>
      </ul>
      </div>
        </div>
      </div>
    </div>
    </>
  )
}

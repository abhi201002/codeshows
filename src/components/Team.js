import React from 'react'

export default function Team() {
  return (
    <div id="carouselExampleCaptions" className="carousel slide" style={{marginLeft:"250px",marginRight:"250px",marginTop:"50px",marginBottom:"50px"}}>
        <h1 style={{textAlign:"center", color:"white",fontFamily:"Georgia, serif"}}>Our Team</h1>
        <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
        <div className="carousel-inner" style={{boxShadow:"20px",borderRadius:"20px"}}>
          <div className="carousel-item active">
            <img src="https://www.koimoi.com/wp-content/new-galleries/2022/11/chris-evans-reveals-he-cant-imagine-how-his-life-would-have-been-without-captain-america-001.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Thor</h5>
              <p>Chowkidaar</p>
            </div>
          </div>
          <div className="carousel-item active">
            <img src="https://images-htschool.hindustantimes.com/wp-content/uploads/2022/07/Thor.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Ant-Man</h5>
              <p>BlackSmith</p>
            </div>
          </div>
          <div className="carousel-item active">
            <img src="https://c4.wallpaperflare.com/wallpaper/515/326/465/iron-man-wallpaper-preview.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>SpiderMan</h5>
              <p>Mechanic</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
  )
}

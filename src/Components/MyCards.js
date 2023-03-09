import React from 'react'
const MyCards = (props) => {

  return (
    <div className="main">
        <div className="Cards">
        <div className="image">
            <img src={props.image}alt="profile" />
        </div>
        <div className='title'>
            <p>{props.designation}</p>
        </div>
        <div className="name">
            <h1>{props.name}</h1>
        </div>
        <div className="description">
            <p>{props.description}</p>
        </div>
        <div className="socialIcons">
            <ul>
                <li><a href="#" class="fa fa-facebook"></a></li>
                <li><a href="#" class="fa fa-twitter"></a></li>
                <li><a href="#" class="fa fa-instagram"></a></li>
            </ul>
        </div>
    </div>
    </div>
  )

}





export default MyCards
import React from 'react'
import MyCards from './Components/MyCards'
import ProfileData from './ProfileData'
import "./index.css"

// const data=(val)=>{

// }

const App = () => {
 
const flexible = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
   backgroundColor: "rgb(199, 37, 164)",
    height: "100vh",
    alignItems: "center",
}

  return (
   <div style={flexible}>
      {ProfileData.map(function(val){
        console.log(val)
        return (
    <MyCards
       image={val.image}
        designation={val.designation}
       name = {val.name}
       description={val.description}
      />
  )
      })}
   </div>
  )
}

export default App
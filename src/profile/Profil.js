import React from 'react'
import PropTypes from "prop-types";

function Profil(props) {
    const{fullName,bio,profession}=props
    const style ={color:"red"}

  return (
    <div>
      <h1 style={style}>my name is {fullName} i {bio} i am {profession} </h1>
    </div>
  )
}
Profil.defaultProps = {
    fullName: "yassine"
}

Profil.propTypes = {
    fullName: PropTypes.string,
}

   

export default Profil
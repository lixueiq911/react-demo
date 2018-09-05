import React from 'react'
import LogoIco from './logo.svg'
import './logo.css'
class Logo extends React.Component{
    render(){
        return (
            <div className="logo-container">
                <img src={LogoIco} alt=""/>
            </div>
        )
    }


}
export default Logo;
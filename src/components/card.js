import React from 'react'
import PropTypes from 'prop-types'

import './Cards.css'



function Card({ title, imagelink, Text }) {
    return (
        <div className="card text-right  animate__animated animate__fadeInUpBig ">


            <div className='overflow '>
                <img src={imagelink} alt="" className='card-img-top' />

            </div>

            <div className="card-body">
                <h2 className="card-title text-center text-light"> {title} </h2>
                <p className="card-text  text-secondary text-justify">
                    {
                        Text ? Text : 'Sin informacion del dragon '
                    }
                </p>
                <a href="#!" className="btn btn-outline-secondary rounded-20 ">
                    Go to this web site
                </a>

            </div>
        </div>

    )
}
Card.propTypes = {
    title: PropTypes.string.isRequired,
    imagelink: PropTypes.string,
    Text: PropTypes.string

}


export default Card

import React from 'react'
import Card2 from "./card2";

// importar imagenes
import image1 from '../assests/THEON.jpg'
import image2 from '../assests/SHAE.jpg'
import image3 from '../assests/YGRITTE.jpg'


const tarjetas = [
    {
        id: 1,
        title: 'THEON GREYJOY  ',
        image: image1,
        text: 'guerrero mas fuerte de westeros'
    },
    {
        id: 2,
        title: "SHAE",
        image: image2,
        text: 'este es el texto de prueba'
    },
    {
        id: 3,
        title: 'YGRITTE',
        image: image3,
        text: 'este es el texto de prueba'
    },
    
]

function cards2() {
    return (
        <div className='col  justify-content-center'>
            <div className="container d-flex justify-content-center align-items-center h-100  ">
                <div className="row">

                    {
                        tarjetas.map(({ title, image, text, id }) => (
                            <div className="col-md-4" key={id}>
                                <Card2 imagelink={image} title={title} Text={text} />
                            </div>
                        ))
                    }

                </div>




            </div>
        </div>
    )
}

export default cards2

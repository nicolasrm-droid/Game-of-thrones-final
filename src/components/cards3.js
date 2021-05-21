import React from 'react'
import Card3 from "./card3";

// importar imagenes
import image1 from '../assests/Dragon1.png'
import image2 from '../assests/Dragon2.png'
import image3 from '../assests/Dragon3.png'


const tarjetas = [
    {
        id: 1,
        title: 'Drogon',
        image: image1,
        text: ''
    },
    {
        id: 2,
        title: "no me se el nombre",
        image: image2,
        text: 'este es el texto de prueba'
    },
    {
        id: 3,
        title: 'no me se el nombre',
        image: image3,
        text: 'este es el texto de prueba'
    },
    {
        id: 4,
        title: 'no me se el nombre',
        image: image3,
        text: 'este es el texto de prueba'
    },
    {
        id: 5,
        title: 'no me se el nombre',
        image: image3,
        text: 'este es el texto de prueba'
    }
]

function cards2() {
    return (
        <div className='col  justify-content-center'>
            <div className="container d-flex justify-content-center align-items-center h-100  ">
                <div className="row">

                    {
                        tarjetas.map(({ title, image, text, id }) => (
                            <div className="col-md-4" key={id}>
                                <Card3 imagelink={image} title={title} Text={text} />
                            </div>
                        ))
                    }

                </div>




            </div>
        </div>
    )
}

export default cards2

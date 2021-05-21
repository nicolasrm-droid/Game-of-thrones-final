import React from 'react'
import Card from "./card";

// importar imagenes
import image1 from '../assests/Dragon1.png'
import image2 from '../assests/Dragon2.png'
import image3 from '../assests/rhaegal.jpg'


const tarjetas = [
    {
        id: 1,
        title: 'DROGON',
        image: image1,
        text: 'caracter y aspecto: grande y fuerte escamas negras cresta color rojo  '
    },
    {
        id: 2,
        title: "VISERION",
        image: image2,
        text: 'caracter y aspecto: posee escamas color crema y doradas en su cresta'
    },
    {
        id: 3,
        title: 'RHAEGAL ',
        image: image3,
        text: 'caracter y aspecto: sus escamas son color bronce y verde'
    },
    
]

function cards() {
    return (
        <div className='col  justify-content-center'>
            <div className="container d-flex justify-content-center align-items-center h-100  ">
                <div className="row">

                    {
                        tarjetas.map(({ title, image, text, id }) => (
                            <div className="col-md-4 " key={id}>
                                <Card imagelink={image} title={title} Text={text} />
                            </div>
                        ))
                    }

                </div>




            </div>
        </div>
    )
}

export default cards

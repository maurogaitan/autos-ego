import React from 'react';

import InfiniteCarousel from 'react-leaf-carousel';
const Carousel = () => {
    return ( 
        <div className="carousel">
        <InfiniteCarousel 
        breakpoints={[
        {
            breakpoint: 500,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            },
        },
        {
            breakpoint: 768,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            },
        },
        {
            breakpoint: 992,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            },
        },
        ]}
        autoCycle={true}
        dots={true}
        showSides={true}
        sidesOpacity={.5}
        sideSize={.1}
        slidesToScroll={1}
        slidesToShow={4}
        scrollOnDevice={true}
    >
        <div>
        <img
            alt=''
            src='https://res.cloudinary.com/dazwqoxcx/image/upload/v1588371137/api-ego/image_3xaaa_kh9bj2.png'
        />
        <h3>Nuevos motores Toyota</h3>
        <p>Dos alternativas diesel con turbo de geometría variable, 1GD (2.8 L) y 2GD (2.4 L).</p>
        </div>
        <div>
        <img
            alt=''
            src='https://res.cloudinary.com/dazwqoxcx/image/upload/v1588370790/api-ego/image3_3x_locf4u.png'
        />
        <h3>Suspensión mejorada</h3>
        <p>Mayor confort de marcha, estabilidad y capacidad Off Road.</p>
        </div>

        <div>
        <img
            alt=''
            src='https://res.cloudinary.com/dazwqoxcx/image/upload/v1588370793/api-ego/image_3x_haze4i.png'
        />
        <h3>Transmisión automática</h3>
        <p>Posibilidad de elección de caja automática de  manejo.</p>
        </div>
        <div>
        <img
            alt=''
            src='https://res.cloudinary.com/dazwqoxcx/image/upload/v1588370790/api-ego/image-4_3x_tnk6wd.png'
        />
        <h3>Transmisión manual</h3>
        <p>Posibilidad de elección de caja automática de  manejo.</p>
        </div>
        <div>
        <img
            alt=''
            src='https://res.cloudinary.com/dazwqoxcx/image/upload/v1588371137/api-ego/image_3xaaa_kh9bj2.png'
        />
        <h3>Nuevos motores Toyota</h3>
        <p>Dos alternativas diesel con turbo de geometría variable, 1GD (2.8 L) y 2GD (2.4 L).</p>
        </div>
        <div>
        <img
            alt=''
            src='https://res.cloudinary.com/dazwqoxcx/image/upload/v1588370790/api-ego/image3_3x_locf4u.png'
        />
        <h3>Suspensión mejorada</h3>
        <p>Mayor confort de marcha, estabilidad y capacidad Off Road.</p>
        </div>

        <div>
        <img
            alt=''
            src='https://res.cloudinary.com/dazwqoxcx/image/upload/v1588370793/api-ego/image_3x_haze4i.png'
        />
        <h3>Transmisión automática</h3>
        <p>Posibilidad de elección de caja automática de  manejo.</p>
        </div>
    
    </InfiniteCarousel>
    </div>
     );
}
 
export default Carousel;
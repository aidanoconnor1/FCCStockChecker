import React, { useRef } from 'react'
import Typed from 'react-typed';
import useTyped from 'use-typed'


export const Display = ({stockData}) => {

    const stock = stockData || ['stockstock']

 
        const animatedStock = React.useRef(null);
        useTyped(animatedStock, {
          strings: stock,
          typeSpeed: 30,
          backSpeed: 30
        });
       
      

    return (
        <div>
            
            <span ref={animatedStock} />
            
        </div>
    )
}

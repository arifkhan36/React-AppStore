import React from 'react';
import LazyLoad from 'react-lazyload';
import './Card.css';

const Card = (props) => (
    <LazyLoad height={650} offset={-100}>
       <div className={props.card.animation}>
          <div className="front" onClick={() => props.showBack(props.card)}>
            <img src="iphone.jpg" alt="iphonex" className="card-image" />
              <div className="container">
               <h3>Iphone 10 <span className="price">$1099</span></h3>
                <p>best iphone ever so you can buy anytime from apple store</p>
              </div>
          </div>
           <div className="container-back back" onClick={() => props.showFront(props.card)}>
             <h3>Iphone 10 <span className="price">$1099</span></h3>
             <p>{props.card.description}</p>
           </div>
     
        </div>
    </LazyLoad>
);

export default Card;
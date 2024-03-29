import React from 'react';
import './Card.css';
import Button from './Button.js';

const Card = (props) => {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img
        className="card-img-top"
        id="size"
        src={props.id}  
        alt="Card image cap"
      />
      <div className="card-body">
        <h5 className="card-title to-flex text-white">{props.textsend}</h5>
        <p className="card-text to-flex text-white  ">1.20 Weth</p>

        <hr className="text-white" />

        <h5 className="card-title to-flex text-white">Ends in 01.34.45</h5>

        <a href="#" className="to-flex text-center border-white">
          Bid
        </a>

        <Button text="Click" />
      </div>
    </div>
  );
};

export default Card;

import React, { useState, useEffect } from 'react';
import { FaQuoteRight } from 'react-icons/fa';


function People({ person, position }) {
    const { id, image, name, title, quote } = person;
    return (
        <article className={position} key={id}>
        <img src={image} alt={title} className="person-img" />
        <h4>{name}</h4>
        <p className="title">{title}</p>
        <p className="text">{quote}</p> 
        <FaQuoteRight className="icon" />
      </article>
    );
}

export default People;
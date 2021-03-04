import React from "react";
import PropTypes from 'prop-types'
import './cards.css'
import Cards from "./Cards";


function Card({title, imageSource, text, url}) {
  return (
    <div className="card text-center bg-dark animate__animated animate__fadeInUpBig">
      <div className="overflow">
        <img src={imageSource} alt="" className="card-img-top"></img>
      </div>
      <div className="card-body text-light">
        <h4 className="card-title">{title}</h4>
        <p className="card-text text-secondary">
          {
              text ? text: 'Aqui se pueden encontrar todas las build de ' + title +' creadas por Nicro4Fun'
          }
        </p>
        <a href={url} className="btn btn-outline-secondary rounded-0 text-light" target="__blank">
            Ir al Sitio Web
        </a>
      </div>
    </div>
  );
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string,
    imageSource: PropTypes.string,
    text: PropTypes.string
}

export default Card;

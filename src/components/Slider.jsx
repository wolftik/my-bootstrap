import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Slider = () => {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./img/first.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>

          <Link exaxt to={'/form'}>
            <Button variant="primary">
              Обратная связь
            </Button>
          </Link>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./img/second.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./img/three.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default Slider

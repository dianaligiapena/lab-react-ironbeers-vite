import React from 'react'
import { useParams } from 'react-router-dom';
import NavBar from './NavBar';

function SingleBeer( {beers} ) {
  const { beerId } = useParams();
  console.log(beerId);

  const beer = beers.find( (beer) => {
    return beer.id === beerId;
  } );

  console.log(beer);

  return (
    <>
      <NavBar />

      <img src={beer.image_url} alt={beer.name}  style={{width:70}}  />
      <h3>Name: {beer.name}</h3>
      <h4>Tagline: {beer.tagline}</h4>
      <h5>First brewed: {beer.first_brewed}</h5>
      <h5>Attenuation level: {beer.attenuation_level}</h5>
      <h5>Description: {beer.description}</h5>
      <h5>Contributed by: {beer.contributed_by}</h5>

    </>
  )
}

export default SingleBeer
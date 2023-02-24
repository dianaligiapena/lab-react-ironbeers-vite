import { Link } from 'react-router-dom'
import NavBar from './NavBar'

function AllBeers( { beers, setBeers } ) {

  const handleSearch = async (event) => {
    const value = event.target.value.toLowerCase();

    const response = await fetch( `https://ih-beers-api2.herokuapp.com/beers/search?q=${value}`);
    const data = await response.json();

    setBeers( data );
  };

  return (
    <>
        <NavBar />
        <label> Search the beers 🍻 down below: </label>
        <input 
            onChange = { (e) => handleSearch(e) }
          />

        <h3>All Beers List</h3>

        { beers.map( (beer) => {
            return (
                <div key={beer._id} style={{border:"1px solid black", margin:"30px", padding:"20px"}}  >
                    <img src={beer.image_url} alt={beer.name}  style={{width:70}}  />
                    <h2>{beer.name}</h2>
                    <h4>{beer.tagline}</h4>
                    <h6>{beer.contributed_by}</h6>
                    <Link to={`/beers/${beer._id}`}>View Beer Details</Link>
                    
                </div>
            )
        } ) }
    </>
  )
}

export default AllBeers
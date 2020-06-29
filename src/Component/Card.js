import React from 'react';
import "tachyons";

const Card = ({ name , email , id }) => {
	return (
	  		  <div className ='tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5'>
			       <img alt='Robot' src={`https://robohash.org/${id}?size=200x200`}/> 
			    <div>
				  <h1>{name}</h1>
				  <p>{email}</p>
			    </div>
			  </div>
			
			);
	}

export default Card;
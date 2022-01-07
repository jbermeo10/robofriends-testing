import React from 'react';

//const Card = (props) => {
const Card = ({ id, name, email }) => {
  //const { name, email, id } = props;
  return (
    //<h1>Robo Friends</h1>
    <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
      <img alt='robots' src={`https://robohash.org/${id}?size=200x200`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;

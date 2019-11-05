import React, { Fragment } from 'react';

const Dev = props => {
  return (
    <Fragment key={props.id}>
      <img className='img-round dev-image' alt='Dev' src={props.img} />
      <h2>{props.name}</h2>
      <p>{props.description}</p>
    </Fragment>
  );
};

export default Dev;

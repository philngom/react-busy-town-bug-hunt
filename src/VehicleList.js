import React from 'react';
import Vehicle from './Vehicle';

export default function VehicleList(props) {
  console.log(props);
  return (
    <div className="traffic">
      <h2>Traffic</h2>
      {props.vehicles.map((vehicle, i) => <Vehicle key={vehicle + i } vehicle={vehicle} />)}
    </div>
  );
}

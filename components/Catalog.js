import React from 'react';
import VehicleList from './VehicleList';
 
const Catalog = () => {
  const vehicles = [
   
    {
      id: 1,
      urlImagen: 'https://cdn.motor1.com/images/mgl/AkBE9P/s3/new-honda-civic-e-hev-hybrid-europe.jpg',
      description: 'Honda Civic, 2024',
      price: 25000,
    },
    {
      id: 2,
      urlImagen: 'https://hips.hearstapps.com/hmg-prod/images/ford-f-150-raptor-2024-1-6502f263a6cce.jpg',
      description: 'Ford F150 raptor',
      price: 30000,
    },
    {
      id: 3,
      urlImagen: 'https://cdn.motor1.com/images/mgl/x60VP/s3/lanzamiento-ford-mustang-2020.jpg',
      description: '2020 Ford Mustang',
      price: 40000,
    },
    {
        id: 4,
        urlImagen: 'https://cdn.motor1.com/images/mgl/x60VP/s3/lanzamiento-ford-mustang-2020.jpg',
        description: 'Honda Civic, 2025',
        price: 25000,
    }
  ];
 
  return <VehicleList vehicles={vehicles} />;
};
 
export default Catalog;
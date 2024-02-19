import React, { useEffect, useState } from 'react'
import config from '../../main/config/config';
import { Modal } from 'react-bootstrap';

type Props = {}

const Location: React.FC = (props: Props) => {
  const [currentPosition, setCurrentPosition] = useState<GeolocationPosition | null>(null);
  const [destination, setDestination] = useState<{ lat: number, lng: number }>({ lat: config.location.lat, lng: config.location.lng });
  const [curent, setCurent] = useState<{ lat: number, lng: number }>({ lat: 0, lng: 0 });
  const [distance, setDistance] = useState<number | null>(null);
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  useEffect(() => {
    const watchId = navigator.geolocation.watchPosition(
      (position) => setCurrentPosition(position),
      (error) => console.error(error)
    );

    return () => navigator.geolocation.clearWatch(watchId);
  }, []);

  useEffect(() => {
    if (currentPosition) {
      const { latitude: lat1, longitude: lng1 } = currentPosition.coords;
      const { lat: lat2, lng: lng2 } = destination;

      const distanceInKm = calculateDistance(lat1, lng1, lat2, lng2);
      setDistance(distanceInKm);
      setCurent({ lat: currentPosition.coords.latitude, lng: currentPosition.coords.longitude });
    }
  }, [currentPosition, destination]);

  const calculateDistance = (lat1: number, lng1: number, lat2: number, lng2: number): number => {
    const R = 6371; // Radius of the earth in km
    const dLat = deg2rad(lat2 - lat1);
    const dLng = deg2rad(lng2 - lng1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
      Math.sin(dLng / 2) * Math.sin(dLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // Distance in km
    return distance;
  }

  const deg2rad = (deg: number): number => {
    return deg * (Math.PI / 180)
  }

  const handleDestinationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setDestination(prevState => ({
      ...prevState,
      [name]: parseFloat(value)
    }));
  }

  return (
    <>
      <div className='d-flex justify-content-center p-2'>
        <p className='fs-1 fw-bolder text-decoration-underline '>Distance Calculator</p>
      </div>
      <div className='d-flex justify-content-center p-2'>
        <p className='fs-1 fw-bolder m-0'>Current LAT: {curent.lat}</p>
      </div>
      <div className='d-flex justify-content-center p-2'>
        <p className='fs-1 fw-bolder m-0'>Current LNG: {curent.lng}</p>
      </div>
      <div className='d-flex justify-content-center p-2'>
        <label htmlFor="lat">KMUTNB Latitude:</label>
        <input className='form-control' type="number" id="lat" name="lat" value={destination.lat} onChange={handleDestinationChange} style={{width:'200px'}}/>
        <p>(Can Change Latitude)</p>
      </div>
      <div className='d-flex justify-content-center p-2'>
        <label htmlFor="lng">KMUTNB Longitude:</label>
        <input className='form-control' type="number" id="lng" name="lng" value={destination.lng} onChange={handleDestinationChange} style={{width:'200px'}}/>
        <p>(Can Change Longitude)</p>
      </div>
      {distance != null && distance <= 0.46 ? (
        <>
          <p className='d-flex justify-content-center p-2'>Distance: {distance.toFixed(2)} km</p>
          <div className='d-flex justify-content-center p-2'>
            <button type="button" className="btn btn-success" onClick={handleShow}>Order</button>
          </div>
        </>
      ) : (
        <>
          <p className='d-flex justify-content-center p-2 fs-1' style={{ color: 'red' }}>OutSide Area {distance?.toFixed(2)}</p>
          <div className='d-flex justify-content-center p-2'>
            <button type="button" className="btn btn-success" disabled>Order</button>
          </div>
        </>
      )
      }
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Order Success</Modal.Title>
        </Modal.Header>
        <Modal.Body><p className='d-flex justify-content-center'>Waiting....</p></Modal.Body>
      </Modal>
    </>
  );
};


export default Location;
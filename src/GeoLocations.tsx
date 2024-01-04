import { useState } from 'react';
import { Geolocation } from '@capacitor/geolocation';

export const GeolocationPage = () => {

  const [loc, setLoc] = useState<any>(null);

  const getCurrentPosition = async () => {
    const coordinates = await Geolocation.getCurrentPosition();
    
    setLoc(coordinates);
  };

  return (
    <div>
      <h1>Geolocation</h1>
      <p>Your location is:</p>
      <p>Latitude: {loc?.coords.latitude}</p>
      <p>Longitude: {loc?.coords.longitude}</p>

      <button onClick={getCurrentPosition}>
        Get Current Location
      </button>
    </div>
  );
}
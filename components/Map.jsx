import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

const PLACE = { lat: 49.19731905873133, lng: 16.61119086871436 };

const MapContainer = ({ google }) => {
  return (
    <Map
      google={google}
      zoom={16}
      initialCenter={PLACE}
    >
      <Marker
        name={'Johnyho barbershop'}
        position={PLACE}
        icon={{
          url: 'barber-pole.svg',
        }}
      />
    </Map>
  );
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBlzmVfhL7op-AAUP3FbKxJs6v09h5pWjg'
})(MapContainer)
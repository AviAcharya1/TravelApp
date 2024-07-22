// src/components/MapComponent.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MapComponent = ({ destinations }) => {
  const [mapUrl, setMapUrl] = useState('');

  const mapStyles = {
    height: "400px",
    width: "100%",
    border: "none"
  };

  // Predefined coordinates for Karnataka destinations
  const locationCoordinates = {
    'Mysore Palace': { lat: 12.3052, lng: 76.6552 },
    'Hampi': { lat: 15.3350, lng: 76.4600 },
    'Gokarna': { lat: 14.5479, lng: 74.3188 },
    'Gol Gumbaz': { lat: 16.8245, lng: 75.7268 },
    'Kabini': { lat: 11.9452, lng: 76.3568 },
    // Add more destinations and their coordinates here
  };

  useEffect(() => {
    const getMapUrl = () => {
      const center = destinations.length > 0 && locationCoordinates[destinations[0].name]
        ? `${locationCoordinates[destinations[0].name].lat},${locationCoordinates[destinations[0].name].lng}`
        : '12.9716,77.5946'; // Bangalore coordinates as default

      const markers = destinations
        .filter(dest => locationCoordinates[dest.name])
        .map(dest => `${locationCoordinates[dest.name].lat},${locationCoordinates[dest.name].lng}`)
        .join('|');

      const options = {
        method: 'GET',
        url: 'https://google-map-places.p.rapidapi.com/maps/api/staticmap',
        params: {
          center: center,
          zoom: '7',
          size: '600x400',
          maptype: 'roadmap',
          markers: markers
        },
        headers: {
          
        }
      };

      axios.request(options)
        .then(function (response) {
          setMapUrl(response.request.responseURL);
        })
        .catch(function (error) {
          console.error('Error fetching map:', error);
        });
    };

    getMapUrl();
  }, [destinations]);

  return (
    <div>
      {mapUrl ? (
        <img src={mapUrl} alt="Map of destinations" style={mapStyles} />
      ) : (
        <p>Loading map...</p>
      )}
    </div>
  );
};

export default MapComponent;
// src/components/DestinationList.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import destinations from '../Destinations.js';
import MapComponent from './MapComponent';

const List = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  margin-bottom: 20px;
  text-align: center;
  width: 300px;
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
`;

const Button = styled.button`
  background: #3498db;
  color: #fff;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
`;

const SearchFilter = styled.div`
  margin-bottom: 20px;
`;

const DestinationList = () => {
  const [favorites, setFavorites] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('');

  const toggleFavorite = (id) => {
    setFavorites(prevFavorites =>
      prevFavorites.includes(id)
        ? prevFavorites.filter(favId => favId !== id)
        : [...prevFavorites, id]
    );
  };

  const filteredDestinations = destinations.filter(dest => 
    dest.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (filterCategory === '' || dest.categories.includes(filterCategory))
  );

  return (
    <div style={{ backgroundColor: "#f0f8ff", padding: "2%" }}>
      <h2>Explore Karnataka's Destinations</h2>
      
      <SearchFilter>
        <input 
          type="text" 
          placeholder="Search destinations" 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select 
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          <option value="Heritage">Heritage</option>
          <option value="Nature">Nature</option>
          <option value="Adventure">Adventure</option>
          {/* Add more categories as needed */}
        </select>
      </SearchFilter>

      <MapComponent destinations={filteredDestinations} />

      <List>
        {filteredDestinations.map((destination) => (
          <ListItem key={destination.id}>
            <Link to={`/destination/${destination.id}`} style={{ textDecoration: 'none', color: '#333' }}>
              <Image src={destination.image} alt={destination.name} />
              <h3>{destination.name}</h3>
              <p>Best Time: {destination.bestTime}</p>
              <p>Rating: {destination.rating}</p>
            </Link>
            <Button onClick={() => toggleFavorite(destination.id)}>
              {favorites.includes(destination.id) ? 'Remove from Favorites' : 'Add to Favorites'}
            </Button>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default DestinationList;
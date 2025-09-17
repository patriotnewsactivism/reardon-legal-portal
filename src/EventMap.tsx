import React from 'react';
import { Box, Typography, Card, CardContent } from '@mui/material';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';

interface EventMapProps {
  events: any[];
}

// Fix for default markers in react-leaflet
const customIcon = new Icon({
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const EventMap: React.FC<EventMapProps> = ({ events }) => {
  // Mock coordinates for events (in real app, would use actual coordinates)
  const eventsWithCoords = events.map((event) => {
    let coords: [number, number];
    
    switch (event.location) {
      case 'Oxford, MS':
        coords = [34.3665, -89.5192];
        break;
      case 'Washington, DC':
        coords = [38.9072, -77.0369];
        break;
      case 'Lafayette, LA':
        coords = [30.2241, -92.0198];
        break;
      default:
        coords = [39.8283, -98.5795]; // Center of US
    }
    
    return { ...event, coords };
  });

  return (
    <Box>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
        Event Map
      </Typography>

      <Card>
        <CardContent>
          <Box sx={{ height: '600px', width: '100%' }}>
            <MapContainer
              center={[39.8283, -98.5795]}
              zoom={5}
              style={{ height: '100%', width: '100%', borderRadius: 8 }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              
              {eventsWithCoords.map((event) => (
                <Marker key={event.id} position={event.coords} icon={customIcon}>
                  <Popup>
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                        {event.title}
                      </Typography>
                      <Typography variant="body2">
                        {event.location}
                      </Typography>
                      <Typography variant="body2">
                        {new Date(event.date).toLocaleDateString()}
                      </Typography>
                      <Typography variant="body2">
                        {event.description}
                      </Typography>
                      <Typography variant="caption" color="primary">
                        {event.category}
                      </Typography>
                    </Box>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default EventMap;
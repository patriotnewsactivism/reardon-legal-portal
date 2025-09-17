import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  Chip,
} from '@mui/material';
import { Person as PersonIcon, Business as BusinessIcon } from '@mui/icons-material';

interface EntitiesProps {
  entities: any[];
}

const Entities: React.FC<EntitiesProps> = ({ entities }) => {
  const getAvatarIcon = (type: string) => {
    switch (type) {
      case 'Person':
      case 'Defendant':
        return <PersonIcon />;
      case 'Organization':
      case 'Court':
      case 'Media':
      case 'Federal Agency':
      case 'Legal Team':
        return <BusinessIcon />;
      default:
        return <PersonIcon />;
    }
  };

  const getColor = (type: string) => {
    const colors: { [key: string]: string } = {
      'Defendant': '#e74c3c',
      'Court': '#3498db',
      'Media': '#f39c12',
      'Federal Agency': '#9b59b6',
      'Legal Team': '#27ae60',
    };
    return colors[type] || '#95a5a6';
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
        Entities & Relationships
      </Typography>

      <Grid container spacing={3}>
        {entities.map((entity) => (
          <Grid item xs={12} sm={6} md={4} key={entity.id}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Box display="flex" alignItems="center" mb={2}>
                  <Avatar
                    sx={{
                      bgcolor: getColor(entity.type),
                      mr: 2,
                      width: 56,
                      height: 56,
                    }}
                  >
                    {getAvatarIcon(entity.type)}
                  </Avatar>
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                      {entity.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {entity.type}
                    </Typography>
                  </Box>
                </Box>
                
                <Typography variant="body2" color="text.secondary" paragraph>
                  <strong>Role:</strong> {entity.role}
                </Typography>
                
                <Typography variant="body2" paragraph>
                  {entity.description}
                </Typography>
                
                <Chip
                  label={entity.type}
                  size="small"
                  sx={{
                    bgcolor: getColor(entity.type),
                    color: 'white',
                  }}
                />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Entities;
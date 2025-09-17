import React, { useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Chip,
  TextField,
  InputAdornment,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import { Search as SearchIcon, Visibility as VisibilityIcon } from '@mui/icons-material';

interface EvidenceProps {
  evidence: any[];
}

const Evidence: React.FC<EvidenceProps> = ({ evidence }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [openDialog, setOpenDialog] = useState(false);

  const filteredEvidence = evidence.filter(
    (item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getRelevanceColor = (relevance: string) => {
    switch (relevance) {
      case 'Critical':
        return 'error';
      case 'High':
        return 'warning';
      case 'Medium':
        return 'info';
      default:
        return 'default';
    }
  };

  const handleViewDetails = (item: any) => {
    setSelectedItem(item);
    setOpenDialog(true);
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
        Evidence Database
      </Typography>

      <Box sx={{ mb: 3 }}>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search evidence..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Box>

      <Grid container spacing={3}>
        {filteredEvidence.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  {item.description}
                </Typography>
                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 2 }}>
                  <Chip label={item.type} size="small" color="primary" />
                  <Chip
                    label={item.relevance}
                    size="small"
                    color={getRelevanceColor(item.relevance)}
                  />
                </Box>
                <Typography variant="body2" color="text.secondary">
                  Date: {new Date(item.date).toLocaleDateString()}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Source: {item.source}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  startIcon={<VisibilityIcon />}
                  onClick={() => handleViewDetails(item)}
                >
                  View Details
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Dialog open={openDialog} onClose={() => setOpenDialog(false)} maxWidth="md" fullWidth>
        <DialogTitle>{selectedItem?.title}</DialogTitle>
        <DialogContent>
          <Typography variant="body1" paragraph>
            {selectedItem?.description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Type: {selectedItem?.type}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Relevance: {selectedItem?.relevance}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Date: {new Date(selectedItem?.date).toLocaleDateString()}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Source: {selectedItem?.source}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>Close</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Evidence;
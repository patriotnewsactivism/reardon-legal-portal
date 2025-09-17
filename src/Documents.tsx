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
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from '@mui/material';
import {
  Search as SearchIcon,
  Description as DescriptionIcon,
  Download as DownloadIcon,
  Visibility as VisibilityIcon,
} from '@mui/icons-material';

interface DocumentsProps {
  documents: any[];
}

const Documents: React.FC<DocumentsProps> = ({ documents }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDoc, setSelectedDoc] = useState<any>(null);
  const [openDialog, setOpenDialog] = useState(false);

  const filteredDocuments = documents.filter(
    (doc) =>
      doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getTypeColor = (type: string) => {
    const colors: { [key: string]: string } = {
      'Legal Motion': '#3498db',
      'Government Response': '#e74c3c',
      'Legal Correspondence': '#f39c12',
      'Legal Document': '#27ae60',
    };
    return colors[type] || '#95a5a6';
  };

  const handleViewDetails = (doc: any) => {
    setSelectedDoc(doc);
    setOpenDialog(true);
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
        Document Repository
      </Typography>

      <Box sx={{ mb: 3 }}>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search documents..."
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
        {filteredDocuments.map((doc) => (
          <Grid item xs={12} sm={6} md={4} key={doc.id}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flexGrow: 1 }}>
                <Box display="flex" alignItems="center" mb={2}>
                  <DescriptionIcon sx={{ mr: 1, color: getTypeColor(doc.type) }} />
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    {doc.title}
                  </Typography>
                </Box>
                
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  {doc.summary}
                </Typography>
                
                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 2 }}>
                  <Chip
                    label={doc.type}
                    size="small"
                    sx={{ bgcolor: getTypeColor(doc.type), color: 'white' }}
                  />
                  <Chip label={doc.court} size="small" variant="outlined" />
                </Box>
                
                <Typography variant="body2" color="text.secondary">
                  {new Date(doc.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </Typography>
              </CardContent>
              
              <CardActions>
                <Button
                  size="small"
                  startIcon={<VisibilityIcon />}
                  onClick={() => handleViewDetails(doc)}
                >
                  View Details
                </Button>
                <Button size="small" startIcon={<DownloadIcon />}>
                  Download
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Dialog open={openDialog} onClose={() => setOpenDialog(false)} maxWidth="md" fullWidth>
        <DialogTitle>{selectedDoc?.title}</DialogTitle>
        <DialogContent>
          <Typography variant="body1" paragraph>
            {selectedDoc?.summary}
          </Typography>
          
          <List>
            <ListItem>
              <ListItemIcon>
                <DescriptionIcon />
              </ListItemIcon>
              <ListItemText primary="Type" secondary={selectedDoc?.type} />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <DescriptionIcon />
              </ListItemIcon>
              <ListItemText primary="Court" secondary={selectedDoc?.court} />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <DescriptionIcon />
              </ListItemIcon>
              <ListItemText
                primary="Date"
                secondary={
                  selectedDoc?.date &&
                  new Date(selectedDoc.date).toLocaleDateString()
                }
              />
            </ListItem>
          </List>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>Close</Button>
          <Button variant="contained" startIcon={<DownloadIcon />}>
            Download Document
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Documents;
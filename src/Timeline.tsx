import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Chip,
  Timeline as MuiTimeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from '@mui/material';
import { Event as EventIcon } from '@mui/icons-material';

interface TimelineProps {
  events: any[];
}

const Timeline: React.FC<TimelineProps> = ({ events }) => {
  const sortedEvents = events.sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'Legal Victory': '#27ae60',
      'FOIA Issue': '#e74c3c',
      'Legal Filing': '#3498db',
      'Media Correction': '#f39c12',
      'New Charges': '#9b59b6',
    };
    return colors[category] || '#95a5a6';
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
        Timeline of Events
      </Typography>

      <MuiTimeline position="alternate">
        {sortedEvents.map((event, index) => (
          <TimelineItem key={event.id}>
            <TimelineOppositeContent>
              <Typography variant="body2" color="textSecondary">
                {new Date(event.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot sx={{ bgcolor: getCategoryColor(event.category) }}>
                <EventIcon />
              </TimelineDot>
              {index < sortedEvents.length - 1 && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent>
              <Card sx={{ mb: 2 }}>
                <CardContent>
                  <Typography variant="h6" component="h2" sx={{ fontWeight: 'bold' }}>
                    {event.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                    {event.location}
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 2 }}>
                    {event.description}
                  </Typography>
                  <Chip
                    label={event.category}
                    size="small"
                    sx={{
                      bgcolor: getCategoryColor(event.category),
                      color: 'white',
                    }}
                  />
                </CardContent>
              </Card>
            </TimelineContent>
          </TimelineItem>
        ))}
      </MuiTimeline>
    </Box>
  );
};

export default Timeline;
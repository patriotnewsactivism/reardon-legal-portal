import React from 'react';
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  LinearProgress,
  Chip,
  CardActions,
  Button,
} from '@mui/material';
import {
  Event as EventIcon,
  Folder as FolderIcon,
  People as PeopleIcon,
  Description as DescriptionIcon,
  TrendingUp as TrendingUpIcon,
} from '@mui/icons-material';

interface DashboardProps {
  events: any[];
  evidence: any[];
  entities: any[];
  documents: any[];
  legalIssues: any[];
}

const Dashboard: React.FC<DashboardProps> = ({
  events,
  evidence,
  entities,
  documents,
  legalIssues,
}) => {
  const stats = [
    {
      title: 'Total Events',
      value: events.length,
      icon: <EventIcon sx={{ fontSize: 40 }} />,
      color: '#3498db',
      description: 'Timeline events documented',
    },
    {
      title: 'Evidence Items',
      value: evidence.length,
      icon: <FolderIcon sx={{ fontSize: 40 }} />,
      color: '#27ae60',
      description: 'Pieces of evidence collected',
    },
    {
      title: 'Entities',
      value: entities.length,
      icon: <PeopleIcon sx={{ fontSize: 40 }} />,
      color: '#e74c3c',
      description: 'People and organizations involved',
    },
    {
      title: 'Documents',
      value: documents.length,
      icon: <DescriptionIcon sx={{ fontSize: 40 }} />,
      color: '#f39c12',
      description: 'Legal documents analyzed',
    },
  ];

  const recentEvents = events
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 5);

  const criticalIssues = legalIssues.filter(
    (issue) => issue.priority === 'Critical'
  );

  return (
    <Box>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
        Case Dashboard
      </Typography>

      {/* Stats Cards */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {stats.map((stat, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card>
              <CardContent>
                <Box display="flex" alignItems="center" justifyContent="space-between">
                  <Box>
                    <Typography color="textSecondary" gutterBottom variant="h6">
                      {stat.title}
                    </Typography>
                    <Typography variant="h3" component="div" sx={{ fontWeight: 'bold' }}>
                      {stat.value}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {stat.description}
                    </Typography>
                  </Box>
                  <Box sx={{ color: stat.color, opacity: 0.8 }}>
                    {stat.icon}
                  </Box>
                </Box>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  View Details
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={3}>
        {/* Recent Events */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                Recent Events
              </Typography>
              {recentEvents.map((event, index) => (
                <Box key={index} sx={{ mb: 2 }}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>
                    {event.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {new Date(event.date).toLocaleDateString()}
                  </Typography>
                  <Typography variant="body2">{event.description}</Typography>
                </Box>
              ))}
            </CardContent>
          </Card>
        </Grid>

        {/* Critical Legal Issues */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                Critical Legal Issues
              </Typography>
              {criticalIssues.map((issue, index) => (
                <Box key={index} sx={{ mb: 2 }}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>
                    {issue.title}
                  </Typography>
                  <Typography variant="body2">{issue.description}</Typography>
                  <Chip
                    label={issue.status}
                    color={issue.status === 'Active' ? 'error' : 'warning'}
                    size="small"
                    sx={{ mt: 1 }}
                  />
                </Box>
              ))}
            </CardContent>
          </Card>
        </Grid>

        {/* Case Progress */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                Case Analysis Progress
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                  <Typography variant="body2" gutterBottom>
                    Evidence Analysis
                  </Typography>
                  <LinearProgress
                    variant="determinate"
                    value={85}
                    sx={{ height: 8, borderRadius: 4 }}
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <Typography variant="body2" gutterBottom>
                    Legal Research
                  </Typography>
                  <LinearProgress
                    variant="determinate"
                    value={92}
                    sx={{ height: 8, borderRadius: 4 }}
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <Typography variant="body2" gutterBottom>
                    Document Review
                  </Typography>
                  <LinearProgress
                    variant="determinate"
                    value={78}
                    sx={{ height: 8, borderRadius: 4 }}
                  />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
import React from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Divider,
  Box,
} from '@mui/material';
import {
  Dashboard as DashboardIcon,
  Timeline as TimelineIcon,
  Folder as FolderIcon,
  People as PeopleIcon,
  Description as DescriptionIcon,
  Map as MapIcon,
  Search as SearchIcon,
} from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';

const drawerWidth = 240;

const Navigation: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { text: 'Dashboard', icon: <DashboardIcon />, path: '/' },
    { text: 'Timeline', icon: <TimelineIcon />, path: '/timeline' },
    { text: 'Evidence', icon: <FolderIcon />, path: '/evidence' },
    { text: 'Entities', icon: <PeopleIcon />, path: '/entities' },
    { text: 'Documents', icon: <DescriptionIcon />, path: '/documents' },
    { text: 'Event Map', icon: <MapIcon />, path: '/map' },
  ];

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
    >
      <Toolbar />
      <Divider />
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton
              selected={location.pathname === item.path}
              onClick={() => navigate(item.path)}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Navigation;
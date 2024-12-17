import React from "react";
import { AppBar, Toolbar, Typography, Switch, Box } from "@mui/material";

const ChatHeader = ({ isDarkMode, onToggleDarkMode }) => {
  return (
    <AppBar position="static" sx={{ backgroundColor: isDarkMode ? "#333" : "#1976d2" }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          OWN-PT
        </Typography>
        <Box>
          <Typography component="span" sx={{ marginRight: 1 }}>
            Dark Mode
          </Typography>
          <Switch checked={isDarkMode} onChange={onToggleDarkMode} />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default ChatHeader;

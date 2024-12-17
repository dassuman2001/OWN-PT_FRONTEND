import React from "react";
import { Box, Typography, CircularProgress } from "@mui/material";

const ChatArea = ({ messages, isLoading }) => {
  return (
    <Box
      sx={{
        flex: 1,
        overflowY: "auto",
        padding: 2,
        backgroundColor: "background.default",
        color: "text.primary",
      }}
    >
      {messages.map((message, index) => (
        <Box
          key={index}
          sx={{
            marginBottom: 2,
            textAlign: message.type === "user" ? "right" : "left",
          }}
        >
          <Typography
            variant="body1"
            sx={{
              display: "inline-block",
              padding: 1.5,
              borderRadius: 2,
              backgroundColor: message.type === "user" ? "primary.main" : "grey.300",
              color: message.type === "user" ? "primary.contrastText" : "text.primary",
            }}
          >
            {message.text}
          </Typography>
        </Box>
      ))}
      {isLoading && (
        <Box sx={{ textAlign: "center", marginTop: 2 }}>
          <CircularProgress />
        </Box>
      )}
    </Box>
  );
};

export default ChatArea;

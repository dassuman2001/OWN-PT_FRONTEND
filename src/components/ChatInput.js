import React, { useState } from "react";
import { Box, TextField, Button } from "@mui/material";
import { Send as SendIcon } from "@mui/icons-material";

const ChatInput = ({ onSendMessage }) => {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim()) {
      onSendMessage(message);
      setMessage("");
    }
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center", padding: 1, borderTop: 1, borderColor: "divider" }}>
      <TextField
        variant="outlined"
        fullWidth
        placeholder="Type your message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={(e) => e.key === "Enter" && handleSend()}
      />
      <Button
        variant="contained"
        sx={{ marginLeft: 1 }}
        onClick={handleSend}
        endIcon={<SendIcon />}
      >
        Send
      </Button>
    </Box>
  );
};

export default ChatInput;

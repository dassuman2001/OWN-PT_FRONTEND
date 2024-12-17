import React, { useState } from "react";
import { Box, CssBaseline, Switch, Typography, createTheme, ThemeProvider } from "@mui/material";
import ChatHeader from "./components/ChatHeader";
import ChatArea from "./components/ChatArea";
import ChatInput from "./components/ChatInput";

const App = () => {
  const [messages, setMessages] = useState([]); // Chat messages
  const [isDarkMode, setIsDarkMode] = useState(false); // Toggle for dark mode
  const [isLoading, setIsLoading] = useState(false); // Loading spinner for API calls

  const handleSendMessage = async (message) => {
    if (message.trim() === "") return; // Prevent empty messages

    // Add user message
    setMessages((prev) => [...prev, { type: "user", text: message }]);
    setIsLoading(true); // Show spinner during API call

    try {
      // Proxy ensures no CORS issues
      const response = await fetch("/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }), // Flask API expects "message" key
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data = await response.json();
      setMessages((prev) => [...prev, { type: "bot", text: data.response || "No response." }]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { type: "bot", text: "Error: Unable to connect to the server." },
      ]);
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  // Create a theme for dark mode
  const theme = createTheme({
    palette: {
      mode: isDarkMode ? "dark" : "light",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ height: "100vh", display: "flex", flexDirection: "column" }}>
        <ChatHeader
          isDarkMode={isDarkMode}
          onToggleDarkMode={() => setIsDarkMode(!isDarkMode)}
        />
        <ChatArea messages={messages} isLoading={isLoading} />
        <ChatInput onSendMessage={handleSendMessage} />
      </Box>
    </ThemeProvider>
  );
};

export default App;

#!/bin/bash

# Navigate to the PharynxOCR directory
cd /home/ubuntu/Chatbot_Comparison_Frontend || exit

# Update package lists and install necessary dependencies
# Stop any process using port 6512
PORT=7004
PID=$(lsof -t -i:$PORT)

npm install

if [ -n "$PID" ]; then
    echo "Stopping process on port $PORT with PID $PID"
    kill -9 $PID
else
    echo "No process found on port $PORT"
fi

# Ensure pm2 is installed and manage the application
if ! command -v pm2 &> /dev/null
then
    echo "pm2 could not be found, please install it first"
    exit 1
fi

# Delete any existing process named "PharynxOCR" and save the configuration
pm2 stop "Chatbot_Comparison_Frontend"
pm2 delete "Chatbot_Comparison_Frontend" --silent
pm2 save --silent

# Start the Python script with pm2 and save the configuration
pm2 start "npm run dev" --name "Chatbot_Comparison_Frontend"
pm2 save
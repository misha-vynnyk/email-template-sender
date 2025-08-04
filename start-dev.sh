#!/bin/bash

echo "🚀 Starting Email Template Sender Development Environment..."

# Перевірка чи встановлені залежності
if [ ! -d "node_modules" ]; then
    echo "📦 Installing frontend dependencies..."
    npm install
fi

if [ ! -d "server/node_modules" ]; then
    echo "📦 Installing backend dependencies..."
    cd server && npm install && cd ..
fi

# Запуск обох серверів
echo "🔥 Starting frontend and backend servers..."
echo "Frontend will be available at: http://localhost:5173"
echo "Backend will be available at: http://localhost:3001"
echo "Press Ctrl+C to stop both servers"
echo ""

# Запуск з concurrently
npm run dev 
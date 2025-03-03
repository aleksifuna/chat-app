import express from 'express';
import cors from 'cors';
import {createServer } from 'http';
import { Server } from 'socket.io';
import { responseObj } from './utils/messages.js';
import chatBot from './utils/llm.js';

const app = express();
app.use(cors());
const http = createServer(app);
const PORT = 4000;
const socketIO = new Server(http, {
    cors: {
        origin: '*',
    }
});

socketIO.on('connection', (socket) => {
    socketIO.emit('Message', responseObj('Admin', 'Welcome to the chat app!'));

    socket.on('Message', ({user, message}) => {
        socketIO.emit('Message', responseObj(user, message));
        chatBot(message).then((response) => {
            socketIO.emit('Message', responseObj('Bot', response));
        });
    });

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });

});



app.get('/', (req, res) => {
    res.json({ message: 'Hello World' });
});

http.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
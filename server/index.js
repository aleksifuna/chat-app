import express from 'express';
import cors from 'cors';
import {createServer } from 'http';
import { Server } from 'socket.io';

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
    console.log(`${socket.id} user just connected!`);

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
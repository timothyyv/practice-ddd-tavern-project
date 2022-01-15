import express from 'express';
import cors from 'cors';
// import * as winston from 'winston';
// import * as expressWinston from 'express-winston';
import * as http from 'http';

const PORT = 3000;
const app: express.Application = express();
app.use(cors())

const server: http.Server = http.createServer(app);
const message = `Server listening on port ${PORT}`;

server.listen(PORT, () => {
    console.log(message);
});

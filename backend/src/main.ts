import express from 'express';
import cors from 'cors';
import getPlaylist from './get-songs';

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const app = express();

app.use(cors());
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/getSongs', (req, res) => {
    console.log(req.body);
    console.log(process.env.SPOTIFY_CLIENT_ID);
    res.send({body: req.body});
    getPlaylist(req.body.url);
});



app.listen(port, host, () => {
  console.log(`Server started at http://${host}:${port}`);
});
import express from 'express';
import cors from 'cors';

const host = process.env.host ?? 'localhost';
const port = process.env.host ? Number(process.env.PORT) : 3000;

const app = express();
app.use(cors());

async function startServer() {
    
    app.post('/convert', (req, res) => {
        
        res.json({
            message: 'Hello, World!',
        });
    });

    
    
    
    const server = app.listen(port, host, () => {
        console.log(`Server is running on http://${host}:${port}`);
    });
}

startServer();

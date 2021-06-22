import cors from 'cors';
import express from 'express';

const app = express();

app.use(express.json());

app.use(
    cors({
        origin: 'http://localhost:8081',
    })
);

app.use('/mock/rettVedDod', (req, res) => {
    res.send({
        vurdering: 'dette er en vurdering',
        rettVedDødType: 'RETT_12_UKER',
    });
});

const port = 8082;
app.listen(port, (error) => {
    if (error) {
        console.error(error);
    }
    console.log('API-mock listening on port', port);
});

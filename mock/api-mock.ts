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

app.use('/mock/omPleietrengende', (req, res) => {
    res.send({ fnr: '012345678912', navn: 'DUCK DOLE', diagnosekoder: ['R619', 'A300'], dodsdato: '2021-05-26' });
});

const port = 8082;
app.listen(port, () => {
    console.log('API-mock listening on port', port);
});

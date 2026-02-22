import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import routes from './prisma/routes/index.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use(routes);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
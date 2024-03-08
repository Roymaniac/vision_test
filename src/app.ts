
import express from 'express';
import router from './routes/route';

const app = express();
app.use(express.json());

app.use('/api', router)

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

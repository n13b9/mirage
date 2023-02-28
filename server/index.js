import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './mongodb/connect.js'
import postRoutes from './routes/postRoutes.js';
import mirageRoutes from './routes/mirageRoutes.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json({limit:'50mb'}));

app.use('/api/v1/post',postRoutes);
app.use('/api/v1/mirage',mirageRoutes);

app.get('/',(req,res)=>{
    res.send('hello chello')
})

const startServer = async () =>{

    try {
        connectDB(process.env.MONGODB_URL)
    } catch (error) {
        
    }

    app.listen(8080,()=> console.log('server has started on port http://localhost:8080'))
}

startServer();
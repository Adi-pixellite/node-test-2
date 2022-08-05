import express, { response } from 'express';
import bodyParser from 'body-parser';




const app = express();
const PORT = process.env.PORT || 4000;
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/a', function sayhi(){
    
    console.log('hi');
})

//Server

app.listen(PORT,()=>{
    console.log(`server listening on port : 4000`);
})
import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';





const app = express();
const PORT = process.env.PORT || 4000;
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req: Request,res: Response)=>{
    res.send({
        success: true,
        data: "Hehe Worked"
    })
})

//Server

app.listen(PORT,()=>{
    console.log(`server listening on port : 4000`);
})

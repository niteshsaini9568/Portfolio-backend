require('dotenv').config();
const express = require('express');
const path = require('path');  
const bodyParser = require('body-parser');
const mainrouter = require("./routes/mainroute");
const cors = require('cors');
const app = express();

const corsOptions = {
    origin: ['https://portfolio-frontend-peach-one.vercel.app', 'https://www.niteshtechfolio.site','https://niteshtechfolio.site', 'http://localhost:5173', 'http://localhost:3000'], 
    methods: ['GET', 'POST', 'PUT', 'DELETE'], 
    credentials: true, 
    allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/", mainrouter);

let port = 8080;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});

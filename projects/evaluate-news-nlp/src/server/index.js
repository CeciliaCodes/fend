//DOTNEV is the environment variable for our api key
const dotenv = require('dotenv');
dotenv.config();
var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const bodyParser = require('body-parser')
const cors = require('cors')
const fetch = require('node-fetch');

const app = express()



//setting up Node server
app.use(express.static('dist'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())


// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!');
    console.log(`Your API key is ${process.env.API_KEY}`);
})

// app.get('/test', function (req, res) {
//     res.send(mockAPIResponse)
// })



app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    // res.sendFile(path.resolve('src/client/views/index.html'))
})



app.post('/analyze', function(req, res){
    const API_KEY = process.env.API_KEY;
    const articleUrl = req.body.articleUrl;

    const baseUrl = "https://api.meaningcloud.com/sentiment-2.1";
    const params = `?key=${API_KEY}&lang=en&model=general&url=${articleUrl}`;
    const urlToFetch = baseUrl + params;


    const response = await fetch(urlToFetch)
        try{
    const data = await response.json()
    res.send({
        score_tag: data.score_tag,
        agreement: data.agreement,
        irony: data.irony
        })
    }catch(error){
      console.log(error)
    }
    //res.send(data)
});



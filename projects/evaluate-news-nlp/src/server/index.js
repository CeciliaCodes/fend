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
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())


// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!');
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

    const baseUrl = "https://api.meaningcloud.com/";
    const params = `/sentiment-2.1?key=${API_KEY}&lang=en&model=restaurantReviewModel_en&url=${articleUrl}`;
    const urlToFetch = baseUrl + params;

    fetch(urlToFetch, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        }
    }).then((response) => {
        return response.json();
    }).then((data) => {
        console.log("data from MeaningCloud", data);
        res.send({
            score_tag: data.score_tag,
            agreement: data.agreement,
            irony: data.irony
        })
    });
});



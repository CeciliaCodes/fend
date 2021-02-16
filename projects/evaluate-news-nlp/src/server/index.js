//DOTNEV is the environment variable for our api key
const dotenv = require('dotenv');
dotenv.config();
var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')

const app = express()

app.use(express.static('dist'))

console.log(__dirname)




app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    // res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!');
    console.log(`Your API key is ${process.env.API_KEY}`);
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})


app.post('/analyze', function(req, res){
    const API_KEY = process.env.API_KEY;
    const articleUrl = req.body.articleUrl;

    const baseUrl = "https://api.meaningcloud.com/sentiment-2.1";
    const params = `?key=${API_KEY}&lang=en&model=general&url=${articleUrl}`;
    const urlToFetch = baseUrl + params;


    fetch(urlToFetch, {
        method: 'POST',
        headers: { 
            "content-type": "application/JSON",
        }

    })


    //res.send(data)
})

//Declaring API credentials

var textapi = new aylien({
    application_key: "process.env.1245be861fb96250fc0440defb01a37d"
  });

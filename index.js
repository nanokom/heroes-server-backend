const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('./queries');

//HTTPS
const https = require('https');
const fs = require('fs'); //file system

//Cerificate
const privateKey = fs.readFileSync('/etc/letsencrypt/live/dev.nanokom.com/privkey.pem', 'utf8');
const certificate = fs.readFileSync('/etc/letsencrypt/live/dev.nanokom.com/cert.pem', 'utf8');
const ca = fs.readFileSync('/etc/letsencrypt/live/dev.nanokom.com/chain.pem', 'utf8');

const options = {
    key: privateKey,
    cert: certificate,
    ca: ca
};
//HTTPS

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

app.get('/', (request, response) => {
    response.json({ info: 'Marvel Heroes' })
})

app.get('/heroes/getAll', db.getAllHeroes)
app.get('/heroes/:id', db.getHeroByID)
app.post('/heroes', db.createHero)
app.put('/heroes/:id', db.updateHero)
app.delete('/heroes/:id', db.deleteHero)
app.get('/heroes', db.searchHeroByName)

//HTTPS
const httpsServer = https.createServer(options, app);
httpsServer.listen(8080, function () {
    console.log("HTTPS Server running on port: 8080")
});
//HTTPS
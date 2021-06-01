var express = require('express');
var router = express.Router();

var gutscheine = [
  {
    spiel : "Brawl Stars",
    headline : "170 Gems: 22 hours of sports (22 days)",
    img : "/images/BrawlStarsGems.jpg",
    std : 22,
    praemie : "170 Gems",
    laufzeit :"22 days",
    max :"1h 30min",
  },
  {
    spiel : "Fall Guys",
    headline : "Queen Outfit (22.000 Kudos): 20 hours of sports (20 days)",
    img : "/images/FallGuys.jpeg",
    std : 20,
    praemie : "Queen Outfit",
    laufzeit :"20 days",
    max :"1h 30min",
  },
  {
    spiel : "Fortnite",
    headline : "Ikonik Skin (1.500 V-Bucks): 30 hours of sports (30 days)",
    img : "/images/ikonik_skin_fortnite.jpg",
    std : 30,
    praemie : "Ikonik Skin",
    laufzeit :"30 days",
    max :"1h 30min",

  },
  {
    spiel : "Super Smash Bros Ultimate",
    headline : "Steve fighter (6€): 12 hours of sports (12 days)",
    img : "/images/Steve-smash-bros.jpg",
    std : 12,
    praemie : "Steve fighter",
    laufzeit :"12 days",
    max :"1h 30min",
  },      
]


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Sport zum Zocken' });
});

router.get('/registrierung', function(req, res, next) {
  res.render('registrierung', { title: 'Sport zum Zocken', req : req });
});

router.get('/auswahl', function(req, res, next) {
  res.render('auswahl', { title: 'Sport zum Zocken', gutscheine : gutscheine });
});
router.get('/danke', function(req, res, next) {
  res.render('danke', { title: 'Sport zum Zocken' });
});
router.get('/ausgewaehlt', function(req, res, next) {
  res.render('ausgewaehlt', { title: 'Sport zum Zocken', req : req, gutscheine : gutscheine });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Sport zum Zocken' });
});
router.get('/problem', function(req, res, next) {
  res.render('problem', { title: 'Sport zum Zocken' });
});

router.get('/impressum', function(req, res, next) {
  res.render('impressum', { title: 'Sport zum Zocken' });
});

router.get('/db', function(req, res, next) {

  const { Client } = require('pg');

  console.log(`DB Server url: ${process.env.DATABASE_URL}`)
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: false,
  });
  
  client.connect();
  
  var rows = [];

  client.query('SELECT table_schema,table_name FROM information_schema.tables;', (err, r) => {
    if (err) throw err;
    for (let row of r.rows) {
      rows.push(row)
    }
    client.end();

    res.render('db', { title: 'Sport zum Zocken DB Test', rows : rows });
  });
});




module.exports = router;

var express = require('express');
var router = express.Router();

var gutscheine = [
  {
    spiel : "Brawl Stars",
    headline : "170 Gems: 22 Stunden Sport (22 Tage)",
    img : "/images/BrawlStarsGems.jpg",
    std : 22
  },
  {
    spiel : "Fall Guys",
    headline : "Herzogin Outfit (22.000 Kudos): 20 Stunden Sport (20 Tage)",
    img : "/images/FallGuys.jpeg",
    std : 20
  },
  {
    spiel : "Fortnite",
    headline : "Epischer Skin (1.500 V-Bucks): 30 Stunden Sport (30 Tage)",
    img : "/images/ikonik_skin_fortnite.jpg",
    std : 30
  },
  {
    spiel : "Super Smash Bros Ultimate",
    headline : "Steve Kämpfer (6€): 12 Stunden Sport (12 Tage)",
    img : "/images/Steve-smash-bros.jpg",
    std : 12
  },      
]


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Sport zum Zocken' });
});

router.get('/registrierung', function(req, res, next) {
  res.render('registrierung', { title: 'Sport zum Zocken' });
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

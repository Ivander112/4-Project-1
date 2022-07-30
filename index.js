const express = require('express');
const path = require('path');
 
const app = express();
 
app.set('views', path.join(__dirname, '/public'));
app.use(express.static('public'))
app.set('view engine', 'ejs');


app.get('/', (req, res) => {
  res.render('page.ejs');
  res.status(200);
});

// app.get('/', (req, res) => {
//     res.sendFile('page.html', { root: __dirname });
//     res.status(200);
//   });

const PORT = parseInt(process.env.PORT) || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});
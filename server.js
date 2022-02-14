const express = require('express');
const cors = require('cors');
const logger = require('morgan');
const routes = require('./routes/');
const app = express();
const path = require('path');
const { auth } = require('express-oauth2-jwt-bearer');
const checkJwt = auth({
  audience: 'https://syndicate-rss.herokuapp.com/api',
  issuerBaseURL: `https://dev-b1qfk9fs.us.auth0.com/`
});
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use('/api', routes);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(`${__dirname}/client/build/index.html`));
  });
}

app.listen(PORT, () => console.log(`Server Running On Port: ${PORT}`));

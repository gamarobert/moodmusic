/* Resources
  - MPJ https://github.com/mpj/oauth-bridge-template
*/
const express = require('express');
const request = require('request');
const querystring = require('querystring');
const dotenv = require('dotenv');

const router = express.Router();
dotenv.config();

let redirect_uri =
  process.env.REDIRECT_URI || 'http://localhost:5000/api/callback';

router.get('/login', (req, res) => {
  res.redirect(
    'https://accounts.spotify.com/authorize?' +
      querystring.stringify({
        response_type: 'code',
        client_id,
        scope: 'user-read-private user-read-email',
        redirect_uri
      })
  );
});

router.get('/callback', (req, res) => {
  let code = req.query.code || null;
  request.post(
    'https://accounts.spotify.com/api/token',
    {
      form: {
        code: code,
        redirect_uri,
        grant_type: 'authorization_code'
      },
      headers: {
        Authorization:
          'Basic ' +
          new Buffer.from(
            process.env.SPOTIFY_CLIENT_ID +
              ':' +
              process.env.SPOTIFY_CLIENT_SECRET
          ).toString('base64')
      },
      json: true
    },
    (err, response, body) => {
      if (err) {
        return console.error(err.message);
      }

      let access_token = body.access_token;
      let uri = process.env.FRONTEND_URI || 'http://localhost:3000/dashboard/';
      res.redirect(uri + '?access_token=' + access_token);
    }
  );
});

module.exports = router;

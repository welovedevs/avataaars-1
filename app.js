import express from 'express';
const { convert } = require('convert-svg-to-png');
process.setMaxListeners(0);
// React Components
import React from 'react';
import RDS from 'react-dom/server';
import Avataaars from 'avataaars';

const app = express();

const pngCache = {}
app.use(function(req, res, next) {
  console.log(`[${req.method}][${new Date().getTime()}]${req.originalUrl}`)
  next();
});
app.get('/', async(req, res) => {
  const appString = RDS.renderToString(<Avataaars {...req.query} />);

  res.set('Content-Type', 'image/svg+xml');
  res.send(appString);
});

app.get('/png/:width?', async(req, res) => {
  const {width :widthParam = "500"} = req.params;
  const width =parseInt(widthParam, 10);

  if(pngCache[req.originalUrl]){
    console.log('Returning cached value for' , req.originalUrl)
    res.set('Content-Type', 'image/png');
    res.send(pngCache[req.originalUrl]);
    return;
  }

  const appString = RDS.renderToString(<Avataaars {...req.query} />);

  const png = await convert(appString, {
    width,
    puppeteer: {
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    }
  });
  pngCache[req.originalUrl] =  png;

  res.set('Content-Type', 'image/png');
  res.send(png);
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err,
    });
  });
}

module.exports = app;

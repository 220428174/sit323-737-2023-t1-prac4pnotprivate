//http://localhost:3040/add/2/3 , 
//http://localhost:3040/subtract/22/12 ,
//http://localhost:3040/divide/100/3 , 
//http://localhost:3040/multiply/7/9 , 



const express = require('express');
const app = express();

const fs = require('fs');

const winston = require('winston');

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'addminusmultidivide-service' },
    transports: [
      //
      // - Write all logs with importance level of `error` or less to `error.log`
      // - Write all logs with importance level of `info` or less to `combined.log`
      //
      new winston.transports.File({ filename: 'error.log', level: 'error' }),
      new winston.transports.File({ filename: 'combined.log' }),
    ],
  });
  
  //
  // If we're not in production then log to the `console` with the format:
  // `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
  //
  if (process.env.NODE_ENV !== 'production') {

    logger.add(new winston.transports.Console({
      format: winston.format.timestamp(),

    }));
  }

app.get('/add/:n1/:n2', (req, res) => {

    const n1 = parseFloat(req.params.n1);
    const n2 = parseFloat(req.params.n2);

    const result = n1 + n2;

    res.send(result.toString());
});

app.get('/subtract/:n1/:n2', (req, res) => {

    const n1 = parseFloat(req.params.n1);
    const n2 = parseFloat(req.params.n2);
  
    const result = n1 - n2;

    res.send(result.toString());
});

app.get('/multiply/:n1/:n2', (req, res) => {
  
    const n1 = parseFloat(req.params.n1);
    const n2 = parseFloat(req.params.n2);
  
    const result = n1 * n2;

    res.send(result.toString());
});

app.get('/divide/:n1/:n2', (req, res) => {

    const n1 = parseFloat(req.params.n1);
    const n2 = parseFloat(req.params.n2);
  
    const result = n1 / n2;
  
    res.send(result.toString());
});

const port = 3040;

app.listen(port,()=> {

    console.log("The Microservice is running on PORT: " +port);

})
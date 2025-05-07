//////////////////////////////////////////////////////////////////////////////////////
//                                                                                  //
//           API FILE FOR THESEED BY Canu Anthony (https://theseed.dev/)            //
//                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////

///////////////
//  imports  //
///////////////

require('dotenv').config();
const express = require('express')
const logger = require('@kayaabadev/logger');
const cvRoutes = require('./routes/cv.theseed.dev/public/cvRoutes')
const { db } = require('./utils/database');
const https = require('https')
const fs = require('fs')
const app = express()
const port = 2083


/////////////////////////////////
//  express rules and headers  //
/////////////////////////////////

//I hate express just for that line (2h of debugging)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Temp headers for dev state
app.use((req, res, next) => {
  const allowedOrigins = ['https://cv.theseed.dev', 'https://theseed.dev'];
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.header('Access-Control-Allow-Origin', origin);
  }
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.header('Access-Control-Allow-Credentials', 'true');
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  next();
})


/////////////////////
//  SO COOL ASCII  //
/////////////////////

console.log(`\x1b[32m
████████╗██████╗ ███████╗███████╗████████╗██╗  ██╗███████╗███████╗███████╗███████╗██████╗    ██████╗ ███████╗██╗   ██╗
╚══██╔══╝██╔══██╗██╔════╝██╔════╝╚══██╔══╝██║  ██║██╔════╝██╔════╝██╔════╝██╔════╝██╔══██╗   ██╔══██╗██╔════╝██║   ██║
   ██║   ██████╔╝█████╗  █████╗     ██║   ███████║█████╗  ███████╗█████╗  █████╗  ██║  ██║   ██║  ██║█████╗  ██║   ██║
   ██║   ██╔══██╗██╔══╝  ██╔══╝     ██║   ██╔══██║██╔══╝  ╚════██║██╔══╝  ██╔══╝  ██║  ██║   ██║  ██║██╔══╝  ╚██╗ ██╔╝
   ██║   ██║  ██║███████╗███████╗██╗██║   ██║  ██║███████╗███████║███████╗███████╗██████╔╝██╗██████╔╝███████╗ ╚████╔╝ 
   ╚═╝   ╚═╝  ╚═╝╚══════╝╚══════╝╚═╝╚═╝   ╚═╝  ╚═╝╚══════╝╚══════╝╚══════╝╚══════╝╚═════╝ ╚═╝╚═════╝ ╚══════╝  ╚═══╝  
\x1b[37m`)


/////////////////////////
//  Start and connect  //
/////////////////////////

//Connect me please
db.connect((err) => {
  if (err) throw err
  logger.info('\x1b[37mBip Boup Boup Bip ! (Mysql - \x1b[32mOK\x1b[37m)')
})

//Just express app
app.use((req, res, next) => {
  logger.debug(`${req.method} ${req.url} - ${req.ip}`)
  next()
})


//////////////
//  Routes  //
//////////////

app.use('/cv', cvRoutes)


////////////////////
//  https server  //
////////////////////

const options = {
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem')
}

https.createServer(options, app).listen(port, () => {
  logger.info(`\x1b[37mBoup Bip Bip ! (Listen on \x1b[32m${port}\x1b[37m)`)
})

/*-------------------------------------------------------------*/

///////////////////
//  http server  //
///////////////////

//app.listen(port, () => {
//  console.log(`\x1b[37mBoup Bip Bip ! (Listen on \x1b[32m${port}\x1b[37m)`)
//})
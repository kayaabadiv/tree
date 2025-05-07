require('dotenv').config();
const axios = require('axios')
const logger = require('@kayaabadev/logger')
const { db } = require('../../../utils/database')
const { logsCategory } = require('../../../utils/logs')

async function contactController(req, res) {
  logger.info(`${logsCategory.cvTheSeed} - ${req.method} ${req.url} - ${JSON.stringify(req.body)} - By ${req.ip}`)
  
  if (!req.body || !req.body.name || !req.body.email || !req.body.subject || !req.body.message) {
    logger.error(`${logsCategory.cvTheSeed} - Missing something in form`)
    return res.status(400).send(`${logsCategory.cvTheSeed} - Missing something in form`)
  }
  
  try {
    await axios.post(process.env.CV_WEBHOOK, {
      content: '@everyone',
      embeds: [{
        title: req.body.name,
        description: req.body.email,
        color: 3447003,
        fields: [
          { name: req.body.subject, value: req.body.message, inline: true },
        ],
        timestamp: new Date().toISOString()
      }]
    });
    
    return res.status(200).json({ success: true, message: `${logsCategory.cvTheSeed} - Sent!` })
    
  } catch (err) {
    logger.error(err)
    return res.status(500).json({ success: false, message: `${logsCategory.cvTheSeed} - Internal Error` })
  } 
}


module.exports = {
  contactController
}
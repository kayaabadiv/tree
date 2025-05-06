require('dotenv').config();
const axios = require('axios')
const logger = require('@kayaabadev/logger')
const { db } = require('../../../utils/database')

async function contactController(req, res) {
  logger.info(`${req.method} ${req.url} - ${JSON.stringify(req.body)} - By ${req.ip}`)
  
  if (!req.body || !req.body.name || !req.body.email || !req.body.subject || !req.body.message) {
    return res.status(400).send('Données manquantes dans la requête')
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
    
    // Assurez-vous de renvoyer une réponse
    return res.status(200).json({ success: true, message: 'Message envoyé avec succès' })
    
  } catch (err) {
    logger.error(err)
    return res.status(500).json({ success: false, message: 'Erreur lors de l\'envoi du message' })
  } 
}


module.exports = {
  contactController
}
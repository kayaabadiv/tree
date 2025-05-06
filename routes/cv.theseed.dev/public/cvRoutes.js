const express = require('express')
const router = express.Router()
const { contactController } = require('../../../controller/cv.theseed.dev/public/contact')

router.post('/public/contact', async (req, res) => {
  contactController(req, res)
})

module.exports = router

// External dependencies
const express = require('express')

const router = express.Router()

router.post('/magical-powers-answer', (req, res) => {

  const hasSymptoms = req.session.data.hasSymptoms

  if (hasSymptoms === 'Yes') {
    res.redirect('/details')
  } 
  else if (hasSymptoms === 'No') {
    res.redirect('/ineligible')
  }
  else {
    res.redirect('/magical-powers')
  }

})

module.exports = router

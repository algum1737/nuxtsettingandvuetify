const router = require('express').Router()

router.get('/', (req, res) => {
  res.send('hello' + Math.random())
})

module.exports = router

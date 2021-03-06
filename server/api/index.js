const router = require('express').Router()
module.exports = router

router.use('/users', require('./users'))
router.use('/courses', require('./courses'))
router.use('/assignments', require('./assignments'))
router.use('/submissions', require('./submission'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})

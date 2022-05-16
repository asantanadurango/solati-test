const router = require('express').Router()

const saveRecords = require('./save.js')
const getRecords = require('./records.js')
const deleteRecords = require('./delete.js')
const convertRecors = require('./convert.js')

router.use(saveRecords)
router.use(getRecords)
router.use(deleteRecords)
router.use(convertRecors)

module.exports = router;

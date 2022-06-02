const express = require('express')
const { createColor, getColor, getColors, updateColor, deleteColor } = require('./color.controller')

const router = express.Router()

router.get('/', getColors)
router.get('/:id', getColor)
router.put('/:id', updateColor)
router.post('/', createColor)
router.delete('/:id', deleteColor)

module.exports = router

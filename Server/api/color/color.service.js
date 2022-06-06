const data_handler = require('../../data/data_handler')

const createColor = async (payload, result) => {
  try {
    const res = await data_handler.createColor(payload)
    if (!res) {
      return result.status(404).end()
    }
    return result.status(200).end()
  } catch (error) {
    console.log(error)
    return result.status(500).end()
  }
}

const getColor = async (id, result) => {
  try {
    const color_details = await data_handler.getColor(id)
    if (!color_details) {
      return result.status(404).end()
    }
    return result.status(200).send(color_details)
  } catch (error) {
    console.log(error)
    return result.status(500).end()
  }
}
const getColors = async (result) => {
  try {
    const color_details = await data_handler.getColors()
    return result.status(200).send(color_details)
  } catch (error) {
    console.log(error)
    return result.status(500).end()
  }
}

const updateColor = async (payload, id, result) => {
  try {
    const res = await data_handler.updateColor(id, payload)
    if (!res) {
      return result.status(404).end()
    }
    return result.status(200).end()
  } catch (error) {
    console.log(error)
    return result.status(500).end()
  }
}

const deleteColor = async (id, result) => {
  try {
    const res = await data_handler.deleteColor(id)
    if (!res) {
      return result.status(404).end()
    }
    return result.status(200).end()
  } catch (error) {
    console.log(error)
    return result.status(500).end()
  }
}

module.exports = {
  createColor,
  getColor,
  getColors,
  updateColor,
  deleteColor,
}

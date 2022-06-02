const color_service = require('./color.service')

const getColor = async (req, res) => {
  try {
    const id = req.params.id
    if (!id) {
      return res.status(400).end()
    }
    color_service.getColor(id, res)
  } catch (error) {
    console.log(error)
    return res.status(400).end()
  }
}

const getColors = async (req, res) => {
  try {
    color_service.getColors(res)
  } catch (error) {
    console.log(error)
    return res.status(400).end()
  }
}

const createColor = async (req, res) => {
  try {
    const body_parameters = await process_payload(req.body)
    if (!body_parameters) {
      return res.status(400).end()
    }
    color_service.createColor(body_parameters, res)
  } catch (error) {
    console.log(error)
    return res.status(400).end()
  }
}

const updateColor = async (req, res) => {
  try {
    const id = req.params.id
    const body_parameters = await process_payload(req.body)
    if (!id || !body_parameters) {
      return res.status(400).end()
    }
    color_service.updateColor(body_parameters, id, res)
  } catch (error) {
    console.log(error)
    return res.status(400).end()
  }
}

const deleteColor = async (req, res) => {
  try {
    const id = req.params.id
    if (!id) {
      return res.status(400).end()
    }
    color_service.deleteColor(id, res)
  } catch (error) {
    console.log(error)
    return res.status(400).end()
  }
}

const process_payload = (payload) => {
  return new Promise(async (resolve, reject) => {
    try {
      const processed_payload = {}
      for (const [key, val] of Object.entries(payload)) {
        if (val !== undefined) {
          switch (key) {
            case 'num_of_votes':
              num_of_votes = Number(val)
              if (!Number.isInteger(num_of_votes) || num_of_votes < 0) {
                return reject({ status: 404 })
              }
              processed_payload.num_of_votes = num_of_votes
              break
            case 'color_code':
              color_code = val.trim()
              if (!/^#([0-9A-F]{3}){1,2}$/i.test(color_code)) {
                return reject({ status: 404 })
              }
              processed_payload.color_code = color_code
              break
            default:
              return reject({ status: 400 })
          }
        }
      }
      return resolve(processed_payload)
    } catch (error) {
      console.log(`Failed to process color payload, The error: ${error}`)
      return reject({ status: 400 })
    }
  })
}

module.exports = {
  createColor,
  getColor,
  getColors,
  updateColor,
  deleteColor,
}

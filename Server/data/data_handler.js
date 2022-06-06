const fs = require('fs')
const path = require('path')

const dataPath = path.resolve(__dirname, 'data.json')

const readFile = async () => {
  try {
    return fs.readFileSync(dataPath, 'utf8')
  } catch (err) {
    console.error(err)
  }
}

const writeFile = async (fileData) => {
  try {
    return fs.writeFileSync(dataPath, JSON.stringify(fileData))
  } catch (err) {
    console.error(err)
  }
}

const getColors = async () => {
  const data = await readFile()
  return data
}

const getColor = async (color_id) => {
  const data = await readFile()
  let json = JSON.parse(data)

  if (json[color_id] != undefined) {
    obj = {}
    obj[color_id] = json[color_id]
    return obj
  }
}

const createColor = async (payload) => {
  try {
    const data = await readFile()
    let json = JSON.parse(data)

    var color_id = payload.color_code
    if (json[color_id] != undefined) {
      console.log('ERROR: Color exists already')
      return false
    }
    json[color_id] = payload.num_of_votes
    await writeFile(json)

    return true
  } catch (err) {
    console.error(err)
  }
}

const updateColor = async (color_id, payload) => {
  try {
    const data = await readFile()
    let json = JSON.parse(data)

    if (json[color_id] == undefined) {
      console.log('ERROR: Color not exists')
      return false
    }

    json[color_id] = payload.num_of_votes
    await writeFile(json)

    return true
  } catch (err) {
    console.error(err)
  }
}

const deleteColor = async (color_id) => {
  try {
    const data = await readFile()
    let json = JSON.parse(data)

    if (json[color_id] == undefined) {
      console.log('ERROR: Color not exists')
      return false
    }

    delete json[color_id]
    await writeFile(json)

    return true
  } catch (err) {
    console.error(err)
  }
}

module.exports = {
  createColor,
  getColor,
  getColors,
  updateColor,
  deleteColor,
}

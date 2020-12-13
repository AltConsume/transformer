const debug = require(`debug`)(`amos:transformer:index`)
const dayjs = require(`dayjs`)
const maps = require(`./maps`)

module.exports = (content, platform) => {
  const map = maps[platform]

  debug(`transforming ${platform} content`)

  if (!map) {
    throw new Error(`${platform} does not have a defined platform -> Schema.org map`)
  }

  if (Array.isArray(content)) {
    debug(`content is array`)
    return content.map(transform)
  } else {
    debug(`content is object`)
    return transform(map, content)
  }
}

const getType = (path) => {
  if (!path.includes(`<`)) {
    return {
      type: null,
      path
    }
  }

  let [ type, _path ] = path.split(`>`)

  type = type.replace(`<`, ``)

  return {
    type,
    path: _path
  }
}

const getNestedValues = (value, path) => {
  let parent
  let rest

  if (typeof path === `string`) {
    [parent, ...rest] = path.split(`.`)
  } else {
    // Handles recursive calls that passed in already split path
    [parent, ...rest] = path
  }

  // If level is described as an array, we want to return an array
  // of nested values
  if (parent.endsWith(`[]`)) {
    parent = parent.slice(0, -2)

    return value[parent].map((childValue) => {
      return getNestedValues(childValue, rest)
    })
  }

  // Allow for index
  if (parent.includes(`[`)) {
    parent = parent.replace(`[`, ``).replace(`]`, ``)
  }

  // If we are at the final step
  if (rest.length === 0) {
    // If we are at the end but the value is an array, we
    // need to extract the final value from the key in the array
    // (or at least that is the assumption)
    if (Array.isArray(value)) {
      return value.map((object) => object[parent])
    }

    return value[parent]
  }

  if (!value[parent]) {
    return null
  }

  // If there is an intermediary step that is not an array
  return getNestedValues(value[parent], rest)
}
const transform = (map, content, output = {}) => {
  debug(`attempting transformation`)

  const outputMap = Object.keys(map).forEach((key) => {
    debug(`mapping value for ${key}`)

    let mapPath = map[key]

    if (typeof mapPath !== 'string') {
      debug(`mapPath for ${key} is object`)

      output[key] = transform(mapPath, content, {})

      return
    }

    const { type, path: _mapPath } = getType(mapPath)

    mapPath = _mapPath

    if (type && type.toLowerCase() === `static`) {
      output[key] = mapPath

      return
    }


    debug(`mapPath is string, mapping ${mapPath} to ${key}`)

    let value = getNestedValues(content, mapPath)

    debug(`${key} = ${value}`)

    switch(type && type.toLowerCase()) {
      case `date`:
        value = dayjs(value).valueOf()

        break
    }

    output[key] = value
  })

  return output
}

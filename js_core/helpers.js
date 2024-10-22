// IsEmpty
export const isEmpty = value =>
{
  if (value === null || value === undefined || value === '')
    return true

  return !!(Array.isArray(value) && value.length === 0)
}

// IsNullOrUndefined
export const isNullOrUndefined = value =>
{
  return value === null || value === undefined
}

// IsEmptyArray
export const isEmptyArray = arr =>
{
  return Array.isArray(arr) && arr.length === 0
}

// IsObject
export const isObject = obj => obj !== null && !!obj && typeof obj === 'object' && !Array.isArray(obj)

// IsToday
export const isToday = date =>
{
  const today = new Date()

  return (
    /* eslint-disable operator-linebreak */
    date.getDate() === today.getDate() &&
        date.getMonth() === today.getMonth() &&
        date.getFullYear() === today.getFullYear()
  /* eslint-enable */
  )
}

/**
 * Convert Hex color to rgb
 * @param hex
 */
export const hexToRgb = hex => {
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i

  hex = hex.replace(shorthandRegex, (m, r, g, b) => {
    return r + r + g + g + b + b
  })

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  
  return result ? `${Number.parseInt(result[1], 16)},${Number.parseInt(result[2], 16)},${Number.parseInt(result[3], 16)}` : null
}

// GetImageUrl - возвращает ссылку на картинку из папки с ресурсами
export const getImageUrl = ( name, ext = 'jpg' ) =>
{
    const imgPath = new URL('@images/', import.meta.url).href
    return imgPath + `${name}.${ext}`;
}

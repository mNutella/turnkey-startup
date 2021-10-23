export function getIp(headers, connection) {
  if (!headers) return ''

  return (
    headers['x-real-ip'] ||
    (headers['x-forwarded-for'] || '').split(',').pop().trim() ||
    connection?.remoteAddress ||
    ''
  )
}

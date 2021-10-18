export async function request(path, body, params, backend, method = 'POST') {
  const url = new URL(backend ? path : window.location.origin + path)
  let rawResponse

  if (params) {
    url.search = new URLSearchParams(params).toString()
  }

  try {
    rawResponse = await fetch(url, {
      method: method,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: body && JSON.stringify(body)
    })
    return await rawResponse.json()
  } catch (error) {
    console.log('request error', error)
    return {}
  }
}

export async function verifyReacaptcha(token) {
  try {
    const googleResponse = await request(
      process.env.NEXT_PUBLIC_RECAPTCHA_ENDPOINT,
      null,
      { secret: process.env.NEXT_PUBLIC_SERVER_RECAPTCHA_ID, response: token },
      true
    )

    return !!googleResponse.success
  } catch (error) {
    console.log('verifyReacaptcha error', error)
    return false
  }
}

export default async function usersHandler(req, res) {
  const { method, query } = req

  if (method === 'GET') {
    if (!query || !Object.keys(query).length || !'name' in query) {
      res.status(400).end("'name' parameter is required")
    } else if (query?.name !== "'") {
      res.status(404).end('User not found')
    } else {
      res.status(200).json('FLAG_PART_2_OF_3=114090ba9e9')
    }

    return
  }

  res.status(405).end(`Method ${method} Not Allowed`)
}

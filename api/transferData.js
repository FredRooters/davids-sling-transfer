export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only POST requests are allowed' });
  }

  const { apiKey, payload } = req.body;

  if (!apiKey || !payload) {
    return res.status(400).json({ message: 'Missing apiKey or payload in request body' });
  }

  console.log("Received secure payload:", payload);

  return res.status(200).json({ message: 'Payload received successfully', received: payload });
}

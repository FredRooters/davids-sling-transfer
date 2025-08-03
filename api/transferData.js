export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only POST requests allowed' });
  }

  try {
    const { apiKey, payload } = req.body;

    if (!apiKey || !payload) {
      return res.status(400).json({ message: 'Missing apiKey or payload' });
    }

    // Log or process the payload here
    console.log("Received secure payload:", payload);

    return res.status(200).json({ message: 'Payload accepted successfully', data: payload });
  } catch (error) {
    return res.status(500).json({ message: 'Server error', error: error.message });
  }
}

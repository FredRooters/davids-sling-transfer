export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only POST requests allowed' });
  }

  try {
    const { apiKey, payload } = req.body;

    if (!payload) {
      return res.status(400).json({ message: 'Missing payload' });
    }

    // Just confirm the payload was received
    return res.status(200).json({ message: 'Payload accepted successfully', data: payload });
  } catch (error) {
    return res.status(500).json({ message: 'Server error', error: error.message });
  }
}

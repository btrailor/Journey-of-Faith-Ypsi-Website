export default function handler(req, res) {
  // Simple GitHub OAuth proxy for Netlify CMS
  const { code, state } = req.query;

  if (!code) {
    return res.status(400).json({ error: "No authorization code provided" });
  }

  // This is a minimal OAuth handler
  // For production, you'd exchange the code for a token
  // For now, let's redirect back to complete the auth flow

  res.redirect(`/admin/#access_token=${code}&token_type=bearer&state=${state}`);
}

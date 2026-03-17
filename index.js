// index.js
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

// Parse JSON bodies (Notion sends JSON)
app.use(bodyParser.json());

// Webhook endpoint
app.post('/webhook', (req, res) => {
  console.log('Received Notion webhook:', JSON.stringify(req.body, null, 2));

  // TODO: Add real logic here
  // 1. Validate Notion signature (using NOTION_WEBHOOK_SECRET from .env)
  // 2. Process the event (page_updated, database_item_created, etc.)
  // 3. Call your OpenClaw gateway/agent (e.g., via axios POST)

  // For now, just acknowledge receipt
  res.status(200).send('Webhook received OK');
});

// Start the server
app.listen(port, () => {
  console.log(`Webhook server listening at http://localhost:${port}`);
  console.log(`Endpoint ready: http://localhost:${port}/webhook`);
});
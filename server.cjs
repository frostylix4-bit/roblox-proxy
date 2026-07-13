const express = require("express");
const app = express();

app.get("/", async (req, res) => {
  const targetUrl = req.query.url;
  if (!targetUrl) return res.status(400).send("Missing url param");

  try {
    const response = await fetch(targetUrl);
    const text = await response.text();
    res.send(text);
  } catch (err) {
    res.status(500).send("Proxy error: " + err.message);
  }
});

app.listen(3000);

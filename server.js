
const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;
const VERSION = "1.0.0";

app.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Cloud Deployment Lab</title>
      </head>
      <body style="font-family:Arial;text-align:center;margin-top:100px">
        <h1>Welcome to My Cloud Application!</h1>
        <h2>Name: Ayush Goswami</h2>
        <h3>Application Version: ${VERSION}</h3>
        <p>Deployed using GitHub, Docker & AWS EC2</p>
      </body>
    </html>
  `);
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});

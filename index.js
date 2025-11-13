const express = require("express");
const cors = require('cors');
const app = express();
app.use(cors());
const port = 3000;

const posts = [
  {
	id: 1,
	title: "My First Blog Post",
	content: "This is the content of my very first post!"
  },
  {
	id: 2,
	title: "A Second Post",
	content: "Here is some more content for the second post."
  }
];

app.get("/", (req, res) => {
  res.send("Welcome to the Blog API!");
});

app.get('/api/posts', (req, res) => {
	res.json(posts);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

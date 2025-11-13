const express = require("express");
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

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

// GET a single post by ID
app.get('/api/posts/:id', (req, res) => {
	// 1. Get the ID from the URL (req.params)
	const { id } = req.params;
	const postId = parseInt(id); // Convert the string ID to a number
  
	// 2. Find the post in our "database"
	const post = posts.find(p => p.id === postId);
  
	// 3. Handle if the post doesn't exist
	if (!post) {
	  return res.status(404).json({ message: 'Post not found' });
	}
  
	// 4. Send the found post as JSON
	res.json(post);
  });
  

app.post('/api/posts', (req, res) => {
	// 1. Get the data from the request body
	const { title, content } = req.body;
  
	// 2. Create a new post object
	// (This is a simple way to get a new ID, not for production)
	const newPost = {
	  id: posts.length + 1,
	  title: title,
	  content: content
	};
  
	// 3. Add it to our "database" array
	posts.push(newPost);
  
	// 4. Send back the new post (with a 201 "Created" status)
	res.status(201).json(newPost);
  });
  

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

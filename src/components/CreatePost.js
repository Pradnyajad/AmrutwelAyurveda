// src/components/CreatePost.js
import React, { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (title && content) {
      try {
        // Reference to the 'posts' collection
        const postsRef = collection(db, "posts");

        // Add the new post to Firestore
        await addDoc(postsRef, {
          title: title,
          content: content,
          createdAt: new Date(),
        });

        // Reset form fields after successful post creation
        setTitle("");
        setContent("");
        alert("Post created successfully!");
      } catch (err) {
        console.error("Error adding post: ", err);
        setError("Error creating post. Please try again.");
      }
    } else {
      setError("Please fill in both the title and content.");
    }
  };

  return (
    <div>
      <h2>Create a New Blog Post</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={handleTitleChange}
            placeholder="Enter blog post title"
            required
          />
        </div>
        <div>
          <label>Content:</label>
          <textarea
            value={content}
            onChange={handleContentChange}
            placeholder="Enter blog post content"
            required
          />
        </div>
        <button type="submit">Publish Post</button>
      </form>
    </div>
  );
};

export default CreatePost;

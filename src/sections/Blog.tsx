// src/sections/BlogPage.tsx
import React from 'react';
import '../styles/section.css';

const Blog: React.FC = () => (
  <section id="blog">
    <h2>Blog</h2>
    <p>Here you can find my latest posts and tech articles.</p>
    <a href="/">Back to Home</a>

    {/* List blog posts or content here */}
  </section>
);

export default Blog;

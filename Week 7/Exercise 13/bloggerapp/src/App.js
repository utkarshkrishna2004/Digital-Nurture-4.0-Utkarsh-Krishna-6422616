import React, { useState } from 'react';
import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';
import CourseDetails from './components/CourseDetails';

function App() {
  const [showBooks, setShowBooks] = useState(false);
  const [showBlogs, setShowBlogs] = useState(true);
  const [showCourses, setShowCourses] = useState(false);

  let bookElement;
  if (showBooks) {
    bookElement = <BookDetails />;
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>Blogger App</h1>

      <h2>Conditional Rendering Examples</h2>

      {/* Element variable (bookElement) */}
      {bookElement}

      {/* Ternary rendering */}
      {showBlogs ? <BlogDetails /> : <p>Blog section is hidden.</p>}

      {/* Logical && rendering */}
      {showCourses && <CourseDetails />}

      <hr />

      <button onClick={() => setShowBooks(!showBooks)}>
        Toggle Book Details
      </button>
      <button onClick={() => setShowBlogs(!showBlogs)}>
        Toggle Blog Details
      </button>
      <button onClick={() => setShowCourses(!showCourses)}>
        Toggle Course Details
      </button>
    </div>
  );
}

export default App;

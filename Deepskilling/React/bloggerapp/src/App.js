import BookDetails from "./Components/BookDetails";
import BlogDetails from "./Components/BlogDetails";
import CourseDetails from "./Components/CourseDetails";

function App() {

  const showBook = true;
  const showBlog = true;
  const showCourse = true;

  let content;

  // Method 1 : if-else
  if (showBook) {
    content = <BookDetails />;
  } else {
    content = <h2>Book Details Hidden</h2>;
  }

  return (
    <div>

      <h1>Blogger App</h1>

      {/* Method 1 : if-else */}
      {content}

      <hr />

      {/* Method 2 : Ternary Operator */}
      {showBlog ? <BlogDetails /> : <h2>Blog Hidden</h2>}

      <hr />

      {/* Method 3 : Logical AND */}
      {showCourse && <CourseDetails />}

    </div>
  );
}

export default App;
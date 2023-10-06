import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Header from "./components/Header/Header";
import PostList from "./components/PostList/PostList";
import SearchForm from "./components/SearchForm/SearchForm";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const apiUrl = "https://jsonplaceholder.typicode.com/posts";

    axios
      .get(apiUrl)
      .then((response) => {
        setData(response.data);
        setFilteredPosts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const [filteredPosts, setFilteredPosts] = useState(data);

  const handleSearch = (query) => {
    const filtered = data.filter(
      (post) =>
        post.title.toLowerCase().includes(query.toLowerCase()) ||
        post.body.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredPosts(filtered);
    if (query !== "") {
      alert(`Searched  with key-word: ${query.toUpperCase()}`);
    } else {
      alert("Going back to main page");
    }
  };

  const suggestions = data.map((item) => item.title);

  return (
    <div className="App">
      <Header onSearch={handleSearch} />
      <SearchForm
        allPosts={data}
        onSearch={handleSearch}
        suggestions={suggestions}
      />
      <PostList data={filteredPosts} />
    </div>
  );
}

export default App;

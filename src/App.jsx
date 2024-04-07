import { useEffect } from "react";
import "./App.scss";

const App = () => {
  async function getData() {
    console.log("entered");
    const data = await fetch("https://api.themoviedb.org/3/movie/top_rated", {
      Headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZGI3ZDRhOTlmZjgzNjc2MjkyNDc0ODYzMWVjN2I1NyIsInN1YiI6IjY1ODFjMmU5Y2VkYWM0MDg2MTdkOGEzNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.d_QH1gjVxuTdtaedCW1DqzKMXM2Z1E_276I8lAuKPpM",
      },
    });

    const res = await data.json();
    console.log(res);
  }

  useEffect(() => {
    getData();
  }, []);
  return <div className="container">App</div>;
};

export default App;

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Search from "./components/Search/Search";
import Card from "./components/Card/Card";
import Pagination from "./components/Pagination/Pagination";
import Filter from "./components/Filter/Filter";
import Navbar from "./components/Navbar/Navbar";
import Episodes from "./Pages/Episodes";
import Location from "./Pages/Location";
import CardDetails from "./components/Card/CardDetails";
import Author from "./components/Footer/Author";

function Home() {
  let [pageNumber, updatePageNumber] = useState(1);
  let [search, setSearch] = useState("");

  let [status, updateStatus] = useState("");
  let [gender, updateGender] = useState("");
  let [species, updateSpecies] = useState("");

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchData(data);
      console.log(data);
    })();
  }, [api]);

  let [fetchData, updateFetchData] = useState([]);
  let { info, results } = fetchData;

  return (
    <div className="App">
      <h1 className="text-center mb-3">Characters</h1>

      <Search setSearch={setSearch} updatePageNumber={updatePageNumber} />

      <div className="container">
        <div className="row">

          <Filter
            pageNumber={pageNumber}
            status={status}
            updateStatus={updateStatus}
            updateGender={updateGender}
            updateSpecies={updateSpecies}
            updatePageNumber={updatePageNumber}
          />

          <div className="col-lg-8 col-12">
            <div className="row">
              <Card page="/" results={results} />
            </div>
          </div>
        </div>
      </div>

      <Pagination
        info={info}
        pageNumber={pageNumber}
        updatePageNumber={updatePageNumber}
      />
      <Author />
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        {/* Routes is a collection of Route(s). Route is the actual file path */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/episodes" element={<Episodes />} />
          <Route path="/location" element={<Location />} />

          <Route path="/:id" element={<CardDetails />} />
          <Route path="/episodes/:id" element={<CardDetails />} />
          <Route path="/location/:id" element={<CardDetails />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;

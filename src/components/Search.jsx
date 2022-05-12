import React from "react";
import { Form, FormControl, Button } from "react-bootstrap";

function Search({ query, setQuery, search }) {
  return (
    <>
      <Form className="search d-flex mx-2 py-3" onSubmit={() => search(query)}>
        <FormControl
          type="search"
          placeholder="What are you looking for?"
          className="searchForm me-2 "
          aria-label="Search"
          value={query}
          onChange={(e) => setQuery(e.currentTarget.value.toLowerCase())}
        />
        <Button className="searchBtn" onClick={() => search(query)} variant="outline-success">
          Search
        </Button>
      </Form>
    </>
  );
}

export default Search;

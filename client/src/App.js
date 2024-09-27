import React from 'react';
import './App.css';
import Masonry from 'react-masonry-css';

function App() {
  return (
    <div className="App">
      <Masonry
        breakpointCols={{
          default: 4,
          1100: 3,
          700: 2,
          500: 1,
        }}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {/* Your images will go here */}
      </Masonry>
    </div>
  );
}

export default App;

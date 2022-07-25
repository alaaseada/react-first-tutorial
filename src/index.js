import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

// Accessing Javascript from JSX requires using {} in CSS we send an object so it is another {}
// style= {{}}
function BookList() {
  return (
    <section className="booklist">
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className="book">
      <div className="book-cover">
        <img
          src="https://images-na.ssl-images-amazon.com/images/I/51p2SDOCV9L._SX218_BO1,204,203,200_QL40_FMwebp_.jpg"
          alt="I love you to the moon and back book cover"
        />
      </div>
      <div className="book-title">
        <a href="https://www.amazon.com/I-Love-You-Moon-Back/dp/1589255518/ref=zg_bs_books_22/137-1926089-6829434?pd_rd_i=1589255518&psc=1">
          I love you to the moon and back
        </a>
      </div>
      <div className="book-author">
        <a href="https://www.amazon.com/Amelia-Hepworth/e/B00O6HYL7G/ref=zg_bs_books_bl_22/137-1926089-6829434?pd_rd_i=1589255518">
          Amalia Hepworth
        </a>
      </div>
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById("root"));

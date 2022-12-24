import React, { useState } from "react";
import data from "./data";
function App() {
  const [count, setCount] = useState<number>(0);
  const [text, setText] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const generatedParagraphs = data.slice(0, count);
    setText(generatedParagraphs);
  };

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const value = parseInt(e.target.value);
    if (value < 0) {
      setCount(0);
    } else {
      setCount(value);
    }
  };
  return (
    <section className="section-center">
      <h3>tired of boring lorem ipsum?</h3>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">paragraphs:</label>
        <input
          type="number"
          name="amount"
          id="amount"
          value={count}
          onChange={handleChange}
        />
        <button type="submit" className="btn">
          Generate
        </button>
      </form>
      <article className="lorem-text">
        {text.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </article>
    </section>
  );
}

export default App;

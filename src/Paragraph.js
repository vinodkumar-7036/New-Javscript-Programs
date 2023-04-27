import { useState } from "react";
import "./Paragraph.css";
function Paragraph() {
  const [inputParagraph, setInputParagraph] = useState("");
  const [outputParagraph, setOutputParagraph] = useState("");
  const [wordMeaning, setWordMeaning] = useState("");

  const onSubmit = () => {
    setOutputParagraph(inputParagraph);
    setInputParagraph("");
  };
  const wordMeaningClick = () => {
    setWordMeaning("");
    fetch("https://dummyjson.com/products/category/smartphones")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        let meaning = data?.[0].meanings?.[0].definitions?.[0].definition;
        setWordMeaning(meaning);
      });
  };
  return (
    <>
      <div className="container">
        <label>Enter Paragraph:</label>
        <textarea
          rows={5}
          cols={50}
          maxLength={400}
          id="paragraph"
          name="paragraph"
          value={inputParagraph}
          placeholder="400 character limit"
          onChange={(e) => setInputParagraph(e.target.value)}
        ></textarea>
        <button className="btn btn-secondary" onClick={() => onSubmit()}>
          Submit
        </button>
      </div>
      <div>
        {outputParagraph.split(" ").map((item, index) =>
          item.length > 4 ? (
            <span
              className="word-link"
              onClick={() => wordMeaningClick(item)}
              key={index}
            >
              {" "}
              {item}{" "}
            </span>
          ) : (
            <span key={index}>{item} </span>
          )
        )}
      </div>
      {wordMeaning && <span>{wordMeaning}</span>}
    </>
  );
}
export default Paragraph;

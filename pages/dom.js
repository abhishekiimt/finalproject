import Head from "next/head";
import styles from "../styles/Home.module.css";
import Sentiment from "sentiment";
import { useState } from "react";

const sentiment = new Sentiment();

export default function Home() {
  const [score, setScore] = useState("");
  const [genralSentiment, setGenralSentiment] = useState("");
  const [token, setToken] = useState("");
  const [positiveWords, setPositiveWords] = useState([]);
  const [negativeWords, setNegativeWords] = useState([]);
  const [color, setColor] = useState("");

  const changeHappen = (e) => {
    const result = sentiment.analyze(e.target.value);

    setScore(result.score);
    if (result.score < 0) {
      setGenralSentiment("Negative");
      setColor("red");
    } else if (result.score > 0) {
      setGenralSentiment("Positive");
      setColor("green");
    } else {
      setGenralSentiment("Neutral");
      setColor("yellow");
    }
    setToken(result.tokens.length);
    setPositiveWords(result.positive);
    setNegativeWords(result.negative);
  };
  const style = {
    borderRadius: 5,
    padding: 5,
    backgroundColor: color,
  };

  return (
    <div>
      <Head>
        <title>Sentiment Analysis</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
      <h2 className={styles.title}>
        Sentiment <span>Analyzer</span>
      </h2>
      </div>
      <div className={styles.container}>
        <textarea
          name="input the text"
          cols="30"
          rows="10"
          placeholder="Enter the text or paste the copy text to sentiment analysis"
          onChange={changeHappen}
        />
      </div>
      <div className={styles.main}>
        <div className={styles.card}>
          <p> Sentiment Score : {score}</p>
          <hr />
          <p>The Length of token : {token}</p>
          <hr />
          <p style={{ marginTop: 15 }}>
            Genral Sentiment : <span style={style}>{genralSentiment}</span>
          </p>
        </div>
        <div className={styles.card}>
          <h3>Positive words</h3>
          {positiveWords.map((positive, index) => (
            <p className={styles.textmuted} key={index}>
              {positive}
            </p>
          ))}
        </div>

        <div className={styles.card}>
          <h3>Negative Words</h3>
          <div className={styles.flex}>
          {negativeWords.map((negative, index) => (
            <p className={styles.textmuted} key={index}>
              {negative}
            </p>
          ))}
          </div>
        </div>
      </div>
    </div>
  );
}

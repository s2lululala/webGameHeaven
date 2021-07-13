import React, { useState, useRef, Fragment } from 'react';

const WordRelay = () => {
  const [text, setText] = useState('');
  const [word, setWord] = useState('감자');
  const [result, setResult] = useState('');
  const inputEl = useRef(null);

  const onSubmitForm = (e) => {
    console.log("???");
    e.preventDefault();
    if (text[0] === word[word.length - 1]) {
      setResult('Right');
      setWord(text);
      setText('');
      inputEl.current.focus();
    } else {
      setResult('Wrong');
      setText('');
      inputEl.current.focus();
    }
  }
  const onChange = (e) => {
    setText(e.target.value);
  }
  return (
    <Fragment>
      <div>{word}</div>
      <form onSubmit={onSubmitForm}>
        <input
          ref={inputEl}
          value={text}
          onChange={onChange}
        />
        <button>입력</button>
      </form>
      <div>{result}</div>
    </Fragment>
  )
}

export default WordRelay;
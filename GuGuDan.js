import React, { useState, useRef, Fragment } from 'react';

const GuGuDan = () => {
  const [first, setFirst] = useState(Math.ceil(Math.random() * 9));
  const [second, setSecond] = useState(Math.ceil(Math.random() * 9));
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');
  const inputEl = useRef(null);

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (parseInt(value) === first * second) {
      setResult('Right');
      setFirst(Math.ceil(Math.random() * 9));
      setSecond(Math.ceil(Math.random() * 9));
      setValue('');
      inputEl.current.focus();
    } else {
      setResult('Wrong');
      setValue('');
      inputEl.current.focus();
    }
  }
  const onChange = (e) => {
    setValue(e.target.value);
  }
  return (
    <Fragment>
      <div>{first} 곱하기 {second}는??</div>
      <form onSubmit={onSubmitForm}>
        <input
          ref={inputEl}
          type='number'
          value={value}
          onChange={onChange}
        />
        <button>입력</button>
      </form>
      <div>{result}</div>
    </Fragment>
  )
}

export default GuGuDan;
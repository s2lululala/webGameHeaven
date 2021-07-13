import React from 'react';
import ReactDom from 'react-dom';
import GuGuDan from './GuGuDan';
import WordRelay from './WordRelay';

const Client = () => {
  return (
    <div>
      <GuGuDan />
      <WordRelay />
    </div>
  )
}

ReactDom.render(<Client />, document.querySelector('#root'));
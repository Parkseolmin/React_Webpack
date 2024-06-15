import React, { useState } from 'react';

export default function WordRelay() {
  const [word, setWord] = useState('박설민');
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');

  const handleChange = (e) => setValue(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (word[word.length - 1] === value[0]) {
      setResult('딩동댕');
      setWord(value);
      setValue('');
    } else {
      setResult('땡');
      setValue('');
    }
  };
  return (
    <>
      <div>{word}</div>
      <form onSubmit={handleSubmit}>
        <input type='text' value={value} onChange={handleChange} />
      </form>
      <div>{result}</div>
    </>
  );
}

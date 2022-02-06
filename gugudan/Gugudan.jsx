const React = require('react');
const { useState, useRef } = React;


const GuGuDan = () => { // 구구단 컴포넌트
    const [first, setFirst] = useState(Math.ceil(Math.random() * 9));
    const [second, setSecond] = useState(Math.ceil(Math.random() * 9));
    const [value, setValue] = useState(''); // 초기값 넣기 
    const [result, setResult] = useState('');
    const inputRef = useRef(null);

    const onSubmitForm= (e) => {
       e.preventDefault();
       if (parseInt(value) === first * second) {
          setResult((prevResult) => {
             return value + ' 정답!';
          });
          setFirst(Math.ceil(Math.random() * 9));
          setSecond(Math.ceil(Math.random() * 9));
          setValue('');
          inputRef.current.focus();
          } else {
             setResult('땡!');
             setValue('');
             inputRef.current.focus();   
          }
       };
    const onChangeInput = (e) => {
       setValue(e.target.value); 
    };               
    console.log('렌더링');
     return ( 
       <>
       <div> {first} 곱하기 {second} 는?</div>
       <form onSubmit={onSubmitForm}>
       <input ref={inputRef} type="number" value={value} onChange={onChangeInput} />
       <button type="submit">입력</button>
       </form> 
       <div id="result">{result}</div>
       </> 
    )
 }


module.exports = GuGuDan;
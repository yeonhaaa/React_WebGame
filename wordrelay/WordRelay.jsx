const React = require('react');
const { useState, useRef } = React;
//hooks 를 쓰면 this 를 안씀 
const WordRelay = () => {
    const [word, setWord] = useState('시작');
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');
    const InputRef = useRef(null);

    const onSubmitForm = (e) => {
        e.preventDefault();
        if (word[word.length - 1] === value[0]) {
            setResult('딩동댕');
            setWord(value);
            setValue('');
            InputRef.current.focus();
        } else {
            setResult('땡');
            setValue('');
            InputRef.current.focus();
        }
    };

    const onChangeInput = (e) => {
        setValue(e.target.value);
    };

    return (
        <>
            <div>{word}</div>
            <form onSubmit={onSubmitForm}>
                <label htmlFor="wordinput">글자를 입력하세요.</label>
                <input id="wordinput" className="wordinput" ref={InputRef} value={value} onChange={onChangeInput} />
                <button >입력!!</button>
            </form>
            <div>{result}</div>

        </>
    )
}



module.exports = WordRelay;


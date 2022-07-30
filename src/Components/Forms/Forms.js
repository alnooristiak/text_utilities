import React, { useState } from 'react';

const Forms = () => {
    const [text, setText] = useState();
    // setText = (handleup);
    const handleUpClick = () =>{
        let newText = text.toUpperCase()
        setText(newText)
    };

    const handleonChanged = (event) => {
        setText(event.target.value)
    }

    return (
        <div className='container'>
            <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">
                    <h4>Example textarea</h4>
                </label>
                <textarea className="form-control" value={text} onChange={handleonChanged} id="exampleFormControlTextarea1" rows="8"></textarea>
                <button onClick={handleUpClick}>Uppercase</button>
            </div>
        </div>
    );
};

export default Forms;
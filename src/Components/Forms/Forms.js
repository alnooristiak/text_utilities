import React, { useState } from 'react';

const Forms = () => {
    const [text, setText] = useState();
    // setText = (handleup);
    const handleUpClick = () =>{
        let newText = text.toUpperCase()
        setText(newText)
    };

    const handleLoClick = () =>{
        let newText = text.toLowerCase()
        setText(newText)
    };

    const handleCopyText = async () => {
        await navigator.clipboard.writeText(text);
        alert('Text copied');
    }

    const handleClearText = () =>{
        let newText = ("")
        setText(newText)
    };

    const handleonChanged = (event) => {
        setText(event.target.value)
    }

    return (
        <div>
            <div className='container'>
                <div className="mb-3 py-4">
                    <div className='pb-3'>
                        <label for="exampleFormControlTextarea1" className="form-label me-2">
                            <h4 className='text-primary'>Example textarea</h4>
                        </label>
                        <button className='btn btn-danger' onClick={handleCopyText}>Clear Text</button>
                    </div>
                    <textarea className="mb-3 form-control" value={text} onChange={handleonChanged} id="exampleFormControlTextarea1" rows="8"></textarea>
                    <div className='py-2'>
                        <button className='me-2 btn btn-primary' onClick={handleUpClick}>Upper Case</button>
                        <button className='btn btn-primary' onClick={handleLoClick}>Lower Case</button>
                    </div>
                    <div>
                        <button className='btn btn-danger' onClick={handleClearText}>Clear Text</button>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                <h3>Your Text Summary</h3>
                <hr className='w-25' />
                {/* <p>Your Text Word {text.split(' ').length} and Carecter's {text.length} </p>
                <p>{0.008 * text.split(' ').length} Minut's to read.</p> */}
                </div>
                <h3>Preview Text:</h3>
                <p className='fw-bold text-primary'>{text}</p>
            </div>
        </div>
    );
};

export default Forms;
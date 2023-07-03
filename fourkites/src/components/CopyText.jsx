import React, { useRef, useState } from 'react';

function CopyText({copied_value}) {
  const copyValue=useState(copied_value)
  const textRef = useRef(null);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    textRef.current.select();
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
    setCopied(true);
  };

  return (
    <div>
        <form>
      {copied ? (
        <p style={{color:'green',fontWeight:'500'}}>Text has been copied!</p>
      ) : (
        <div style={{position:'relative'}}>
          <input type="text" ref={textRef} value={copyValue} className='form-control' readOnly style={{pointerEvents:'none'}}/>
          <button onClick={handleCopy} className='copy_icon'>
            <i class="fa-solid fa-clipboard"></i>
          </button>
          <p style={{color:'red',fontWeight:'500'}}>please copy the text..</p>
        </div>
      )}
      </form>
    </div>
  );
}

export default CopyText;

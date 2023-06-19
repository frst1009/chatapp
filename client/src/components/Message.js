import React from 'react'

function Message() {
    const handleSubmit = (e) => {
        e.preventDefault();
      };
  return (
    <div>
        <form onSubmit={handleSubmit}>
<input type='text' />
<button>Send</button>
        </form>
        <ul style={{overflow: "scroll", background: "lightblue", listStyleType: "none"}}>
<li>something</li>
        </ul>
    </div>
  )
}

export default Message
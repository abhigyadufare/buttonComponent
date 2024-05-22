import React, { useState } from 'react'

const Button = () => {
    const [hostname, setHostname] = useState('');
    const handleSubmit = () => {
        setHostname(document.location.host);
      };
  return (
    <>
        <button onClick={handleSubmit}>Get HostName new</button>
        {hostname && (
            <p>Hostname: {hostname}</p>
        )}
    </>
  )
}

export default Button
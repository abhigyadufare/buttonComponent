import React, { useState } from 'react'

const Button = () => {
    const [hostname, setHostname] = useState('');
    const handleSubmit = () => {
        setHostname(window.location.hostname);
      };
  return (
    <>
        <button onClick={handleSubmit}>Get HostName</button>
        {hostname && (
            <p>Hostname: {hostname}</p>
        )}
    </>
  )
}

export default Button
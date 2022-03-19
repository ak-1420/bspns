import React from 'react'

const notFoundStyle = {
    display:'flex',
    justifyContent:'center',
    flexDirection:'column',
    alignItems:'center'
}

function NotFound() {
    return (
        <div style={notFoundStyle}>
            <h1>404 Not Found</h1>
            <h4>Oops the page you are looking for  is  doesn't exist</h4>
        </div>
    )
}

export default NotFound

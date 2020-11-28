import React, { useEffect } from 'react'

const Alert = ({ msg, type, removeAlert, list }) => {

  // Every time the list is updated, a new timeout is set, that's why we pass the list
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 3000);
    return () => clearTimeout(timeout);
  }, [list]);

  return <p className={`alert alert-${type}`}>{msg}</p>
}

export default Alert

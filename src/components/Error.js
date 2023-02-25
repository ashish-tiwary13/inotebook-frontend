import React,{useState,useContext, useEffect} from 'react'
import NoteContext from '../context/notes/noteContext'

const Error = () => {
    const context = useContext(NoteContext);
    const {Err,displayError} = context.Error;
    const [error, setError] = useState("")
    useEffect(() => {
        setError(Err);
    }, [Err,displayError])
  return (
    <div className={`alert alert-danger alert-dismissible d-${displayError}`} style={{marginBottom: "auto"}}>
      <button type="button" className="btn-close" data-bs-dismiss="alert"></button>
      <strong>Warning!</strong> {error}
    </div>
  )
}

export default Error
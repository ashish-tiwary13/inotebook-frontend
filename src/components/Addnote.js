import React,{useState,useContext,useEffect} from "react";
import NoteContext from '../context/notes/noteContext'
import logo from "../images/image.png";

function Addnote() {
    const context = useContext(NoteContext);
    const {addNote, getNotes} = context;
    const {setTitleA,setDescA,setTagA}= context.NoteA;

    const [note, setNote] = useState({title:"",description:"",tag:""})
    const [username, setUsername] = useState("")
    const handleClick=(e)=>{
        e.preventDefault();
        addNote(note.title,note.description,note.tag);
        setTitleA(note.title);
        setDescA(note.description);
        setTagA(note.tag);
        getNotes();
        setNote({title:"",description:"",tag:""})
    }
    const onChange=(e)=>{
        setNote({...note,[e.target.name]:e.target.value})
    }
    // additional setting for Adding notes
    const [display, setDisplay] = useState("none");
    const [rotate, setRotate] = useState("");
    const handleAddNote =(e)=>{
        e.preventDefault();
        setDisplay(display==="none"?"block":"none");
        setRotate(rotate==="rotationForward"?"rotationReverse":"rotationForward");
    }

    //for fetching user name;
    useEffect(() => {
        const userName=localStorage.getItem('username');
        const modifiedUserName = userName.charAt(0).toUpperCase() + userName.slice(1);
        setUsername(modifiedUserName);
        // eslint-disable-next-line
      }, []);
    return (
        <div>
            <div className="container h3 d-flex justify-content-center my-4">{`Hello, ${username}`}</div>
            <div className="Add-note my-2" style={{marginBottom:"7vh"}}><span className="A">A</span><span className="dd-note">dd Note</span></div>
            <div className="image mb-4"  style={{cursor:"pointer"}}><img onClick={handleAddNote} src={logo} style={{animation:`${rotate} 0.3s linear 0s 1 forwards`}} className="img" alt="images"></img></div>
            <div className="container my-4" style={{display: `${display}`}}>
                <form>
                <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">
                            Title
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="title"
                            name="title"
                            aria-describedby="emailHelp"
                            onChange={onChange}
                            value={note.title}
                        />
                    </div>
                    <div className="form-outline">
                        <label className="form-label" for="textAreaExample">Description</label>
                        <textarea 
                            className="form-control" 
                            rows="4" 
                            id="description" 
                            name="description" 
                            value={note.description} 
                            onChange={onChange}>
                        </textarea>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">
                            Tag
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="tag"
                            name="tag"
                            value={note.tag}
                            onChange={onChange}
                        />
                    </div>
                    <button disabled={note.title.length<1 || note.description.length<1} type="submit" className="btn btn-success" onClick={handleClick}>Add Note</button>
                </form>
            </div>
        </div>
    );
}

export default Addnote;

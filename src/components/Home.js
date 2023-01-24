import React,{useContext} from "react";
import Notes from "./Notes";
import NoteContext from '../context/notes/noteContext'
import Loading from "./Loading";

function Home() {
  const context = useContext(NoteContext);
  const {isLoading} = context.Loading;
  // console.log(isLoading)
  return (
    <>
        {isLoading?<Loading/>:
      <div className="container">
      <Notes/>
      </div>
      }
    </>
  );
}

export default Home;

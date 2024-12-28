import React from "react";
import Header from "./Header"
import Footer from "./Footer"
import Note from "./Note"
import Notes from "../notes"

function App(){
    return <div>
    <Header />
    
   {Notes.map((allnote) => <Note 
    key={allnote.key}
    title={allnote.title}
    content={allnote.content}/>
)}
<Footer />
    </div>
}
 export default App;
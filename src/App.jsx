import React,{useState} from 'react'
import Gallery from './components/Gallery'
import SearchBox from './components/SearchBox'

const App = () => {

  const [input, setInput] = useState("");
    return (
        <center>
            <h1>Image Gallery</h1>
            <h4>A simple Website to Search Images and download</h4>
            <SearchBox input={input} setInput={setInput}/>
            <Gallery query={input}/>
        </center>
    )
}

export default App

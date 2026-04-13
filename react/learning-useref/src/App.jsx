import { useState } from 'react'
import styles from "./App.module.css"

function App() {
  const [fieldText, setfieldText] = useState("");

  return (
    <>
      <input 
        type="text" 
        name="text-field" 
        id={`${styles["text-field"]}`} 
        onChange={event => {setfieldText(event.target.value)}}
        placeholder="Write something..."/>
      <div className={styles["output"]}>{fieldText}</div>
    </>
  )
}

export default App;
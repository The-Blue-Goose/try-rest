import './App.css';
import Axios from 'axios';
import { useState } from 'react';

const App = () =>{
    const [joke, setJoke] = useState()
    const getJoke = () => {
        Axios.get("https://icanhazdadjoke.com/", {
        headers: {
            "Accept": "application/json",
          }
        }
        ).then(
            (response) => {
                //console.log(response);
                setJoke(response.data.joke);
                }
            );
        };
 return (
<div className="container"><button onClick={getJoke}>dad joke</button>
<br/><p>Hi!</p>
</div>
 );
};
export default App;
